import React, { useEffect, useRef } from 'react';
import skillsData from '../../data/skills.json';
import styles from './PhysicsBackground.module.css';

const PhysicsBackground = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const scrollYRef = useRef(0);
  const iconsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // 성능 향상: 투명도 계산 최소화

    const allSkills = skillsData.categories.flatMap(cat => cat.skills);
    const pageHeight = document.documentElement.scrollHeight || 5000;

    // 1. 초기 아이콘(별) 생성
    const initIcons = () => {
      const icons = [];
      const iconCount = 50; // 적절한 개수 유지

      for (let i = 0; i < iconCount; i++) {
        const skill = allSkills[i % allSkills.length];
        icons.push({
          skill,
          x: Math.random() * window.innerWidth,
          y: Math.random() * pageHeight, // 전체 페이지 높이에 분산
          z: Math.random() * 0.5 + 0.2, // 깊이감 (속도/크기 계수)
          vx: (Math.random() - 0.5) * 0.2, // 아주 느린 무작위 이동
          vy: (Math.random() - 0.5) * 0.2,
          type: Math.random() > 0.9 ? 'comet' : 'float', // 10%는 혜성 후보
          opacity: Math.random() * 0.5 + 0.3,
          radius: Math.random() * 10 + 15, // 15~25 사이의 크기
          imageObj: null
        });
      }

      // 이미지 미리 로딩
      icons.forEach(icon => {
        if (icon.skill.image) {
          const img = new Image();
          img.src = icon.skill.image;
          icon.imageObj = img;
        }
      });

      iconsRef.current = icons;
    };

    // 2. 혜성(Comet) 발사 로직
    const triggerComet = (icon) => {
      if (icon.type === 'comet' && !icon.isFlying) {
        icon.isFlying = true;
        icon.x = -100;
        icon.y = Math.random() * window.innerHeight + scrollYRef.current;
        icon.vx = Math.random() * 5 + 5; // 빠른 속도
        icon.vy = (Math.random() - 0.5) * 2;
        icon.opacity = 1;
      }
    };

    // 3. 드로잉 함수
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 배경을 지워 투명하게 유지

      const scrollY = window.scrollY;
      scrollYRef.current = scrollY;

      iconsRef.current.forEach(icon => {
        // 위치 업데이트
        icon.x += icon.vx;
        icon.y += icon.vy;

        // 화면 밖으로 나가면 반대편으로 (Floater 기준)
        if (icon.type === 'float') {
          if (icon.x < -50) icon.x = canvas.width + 50;
          if (icon.x > canvas.width + 50) icon.x = -50;
          if (icon.y < -50) icon.y = pageHeight + 50;
          if (icon.y > pageHeight + 50) icon.y = -50;
        } else if (icon.isFlying) {
          // 혜성 로직
          if (icon.x > canvas.width + 200) {
            icon.isFlying = false;
            icon.opacity = Math.random() * 0.5 + 0.3;
          }
        }

        // 혜성 랜덤 발사
        if (icon.type === 'comet' && !icon.isFlying && Math.random() > 0.999) {
          triggerComet(icon);
        }

        // 현재 뷰포트에 보이는지 확인
        const relativeY = icon.y - scrollY;
        if (relativeY > -100 && relativeY < canvas.height + 100) {
          ctx.save();
          ctx.globalAlpha = icon.opacity * (icon.isFlying ? 1 : icon.z); // 멀리 있는건 흐릿하게

          const scale = icon.isFlying ? 1.2 : icon.z + 0.5;
          const currentRadius = icon.radius * scale;

          // 1. 공 모양 배경
          ctx.beginPath();
          ctx.arc(icon.x, relativeY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(20, 20, 40, 0.8)';
          ctx.fill();
          ctx.strokeStyle = icon.isFlying ? 'rgba(168, 85, 247, 0.8)' : 'rgba(99, 102, 241, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // 2. 아이콘 또는 텍스트
          if (icon.imageObj && icon.imageObj.complete) {
            ctx.drawImage(
              icon.imageObj,
              icon.x - currentRadius * 0.6,
              relativeY - currentRadius * 0.6,
              currentRadius * 1.2,
              currentRadius * 1.2
            );
          } else {
            ctx.fillStyle = '#fff';
            ctx.font = `${Math.floor(10 * scale)}px Inter`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(icon.skill.emoji || icon.skill.name.substring(0, 2), icon.x, relativeY);
          }

          // 혜성 꼬리 효과
          if (icon.isFlying) {
            const tailGrad = ctx.createLinearGradient(icon.x, relativeY, icon.x - 100, relativeY - icon.vy * 10);
            tailGrad.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
            tailGrad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.moveTo(icon.x, relativeY);
            ctx.lineTo(icon.x - 100, relativeY - icon.vy * 10);
            ctx.lineWidth = currentRadius;
            ctx.strokeStyle = tailGrad;
            ctx.stroke();
          }

          ctx.restore();
        }
      });

      requestRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    initIcons();
    requestRef.current = requestAnimationFrame(draw);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PhysicsBackground;
