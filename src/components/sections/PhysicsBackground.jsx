import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import skillsData from '../../data/skills.json';
import styles from './PhysicsBackground.module.css';

const PhysicsBackground = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    // 1. 엔진 및 물리 세계 초기화 (성능 고도화)
    const engine = Matter.Engine.create({
      enableSleeping: true,
      positionIterations: 3, // 정밀도 낮춤 (성능 이득)
      velocityIterations: 2
    });
    engineRef.current = engine;
    const world = engine.world;
    engine.gravity.y = 0.8;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight * 2.3,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 1, // 절대 1 고정 (성능 핵심)
        hasBounds: true
      }
    });

    // 벽/바닥 생성
    const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.1 };
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight * 2.25, window.innerWidth * 2, 100, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-20, window.innerHeight, 40, window.innerHeight * 6, wallOptions);
    const rightWall = Matter.Bodies.rectangle(window.innerWidth + 20, window.innerHeight, 40, window.innerHeight * 6, wallOptions);
    Matter.World.add(world, [ground, leftWall, rightWall]);

    const allSkills = skillsData.categories.flatMap(cat => cat.skills);
    const textureMap = {};
    const radius = 26;

    // 2. 텍스처 프리-렌더링 (60x60 저해상도 최적화)
    const createTexture = async (skill) => {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const size = 60;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const drawBase = () => {
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2 - 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(15, 15, 25, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
          ctx.lineWidth = 2;
          ctx.stroke();
        };

        if (skill.image) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = skill.image;
          img.onload = () => {
            drawBase();
            ctx.save();
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(img, size * 0.2, size * 0.2, size * 0.6, size * 0.6);
            ctx.restore();
            resolve(canvas.toDataURL());
          };
          img.onerror = () => {
            drawBase();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(skill.name.substring(0, 2), size / 2, size / 2 + 4);
            resolve(canvas.toDataURL());
          };
        } else {
          drawBase();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#fff';
          if (skill.emoji) {
            ctx.font = '30px Arial';
            ctx.fillText(skill.emoji, size / 2, size / 2 + 2);
          } else {
            ctx.font = 'bold 12px Inter';
            ctx.fillText(skill.name.substring(0, 2), size / 2, size / 2 + 4);
          }
          resolve(canvas.toDataURL());
        }
      });
    };

    const startSpawning = async () => {
      for (const skill of allSkills) {
        if (!textureMap[skill.name]) {
          textureMap[skill.name] = await createTexture(skill);
        }
      }

      let count = 0;
      const MAX_ICONS = 90; // 개수를 살짝 줄여 안정성 확보

      const spawnInterval = setInterval(() => {
        if (!engineRef.current || count >= MAX_ICONS) {
          clearInterval(spawnInterval);
          return;
        }

        const skill = allSkills[count % allSkills.length];
        const x = Math.random() * (window.innerWidth - 80) + 40;

        const body = Matter.Bodies.circle(x, -50, radius, {
          restitution: 0.4,
          frictionAir: 0.03, // 일정한 낙하 속도를 위해 공기저항 유지
          sleepThreshold: 15, // 멈춤 감지 더 민감하게
          render: {
            sprite: {
              texture: textureMap[skill.name],
              xScale: (radius * 2) / 60,
              yScale: (radius * 2) / 60
            }
          }
        });

        Matter.World.add(world, body);
        count++;
      }, 200);
      return spawnInterval;
    };

    let spawnInterval;
    startSpawning().then(id => spawnInterval = id);

    // 3. [성능 핵심] 수동 프레임 제어 루프
    const update = () => {
      if (engineRef.current) {
        // 물리 엔진을 일정한 시차(16.6ms)만큼만 업데이트하도록 강제
        // 이렇게 하면 렉이 걸려도 공이 튀지 않고 천천히 움직입니다.
        Matter.Engine.update(engine, 1000 / 60);
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
    Matter.Render.run(render);

    // 4. 리사이즈 핸들러 버그 수정
    const handleResize = () => {
      if (!render.canvas) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      render.canvas.width = width;
      render.canvas.height = height * 2.3;
      Matter.Body.setPosition(ground, { x: width / 2, y: height * 2.25 });
      Matter.Body.setPosition(leftWall, { x: -20, y: height });
      Matter.Body.setPosition(rightWall, { x: width + 20, y: height });
    };

    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (spawnInterval) clearInterval(spawnInterval);

      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      engineRef.current = null;
      render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} className={styles.canvasContainer} />;
};

export default PhysicsBackground;
