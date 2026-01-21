import React, { useEffect, useRef } from 'react';
import skillsData from '../../data/skills.json';
import styles from './PhysicsBackground.module.css';

const PhysicsBackground = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const scrollYRef = useRef(0);
  const iconsRef = useRef([]);
  const starsRef = useRef([]);

  const spaceIcons = ['☀️', '🪐', '🌙', '☄️', '🌟', '🌍', '🛸', '🛰️', '🌑'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    const allSkills = skillsData.categories.flatMap(cat => cat.skills);
    const pageHeight = document.documentElement.scrollHeight || 5000;

    const initStars = () => {
      const stars = [];
      const starCount = 200;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * pageHeight,
          size: Math.random() * 1.5,
          opacity: Math.random() * 0.7 + 0.3,
          blinkSpeed: Math.random() * 0.02 + 0.005
        });
      }
      starsRef.current = stars;
    };

    const initIcons = () => {
      const icons = [];
      const iconCount = 50;

      for (let i = 0; i < iconCount; i++) {
        const skill = allSkills[i % allSkills.length];

        let finalImage = skill.image;
        if (!finalImage && skill.iconClass) {
          const parts = skill.iconClass.split(' ')[0].split('-');
          if (parts.length >= 3) {
            const name = parts[1];
            const version = parts[2];
            finalImage = `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/${name}/${name}-${version}.svg`;
          }
        }

        icons.push({
          skill,
          imageUrl: finalImage,
          x: Math.random() * window.innerWidth,
          y: Math.random() * pageHeight,
          z: Math.random() * 0.5 + 0.4,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          type: Math.random() > 0.88 ? 'comet' : 'float',
          opacity: Math.random() * 0.4 + 0.6,
          radius: Math.random() * 5 + 18,
          imageObj: null,
          isImageError: false,
          fallbackEmoji: spaceIcons[i % spaceIcons.length]
        });
      }

      icons.forEach(icon => {
        if (icon.imageUrl) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            if (img.complete && img.naturalWidth > 0) {
              icon.imageObj = img;
            } else {
              icon.isImageError = true;
            }
          };
          img.onerror = () => { icon.isImageError = true; };
          img.src = icon.imageUrl;
        } else {
          icon.isImageError = true;
        }
      });

      iconsRef.current = icons;
    };

    const triggerComet = (icon) => {
      if (icon.type === 'comet' && !icon.isFlying) {
        icon.isFlying = true;
        icon.x = -100;
        icon.y = Math.random() * window.innerHeight + scrollYRef.current;
        icon.vx = Math.random() * 7 + 7;
        icon.vy = (Math.random() - 0.5) * 2;
        icon.opacity = 1;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = window.scrollY;
      scrollYRef.current = scrollY;

      starsRef.current.forEach(star => {
        star.opacity += star.blinkSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) star.blinkSpeed *= -1;
        const relativeY = (star.y - scrollY * 0.3) % pageHeight;
        const finalY = relativeY < 0 ? relativeY + pageHeight : relativeY;
        if (finalY < canvas.height) {
          ctx.beginPath();
          ctx.arc(star.x, finalY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
        }
      });

      iconsRef.current.forEach(icon => {
        icon.x += icon.vx;
        icon.y += icon.vy;

        if (icon.type === 'float') {
          if (icon.x < -50) icon.x = canvas.width + 50;
          if (icon.x > canvas.width + 50) icon.x = -50;
          if (icon.y < -50) icon.y = pageHeight + 50;
          if (icon.y > pageHeight + 50) icon.y = -50;
        } else if (icon.isFlying) {
          if (icon.x > canvas.width + 300) {
            icon.isFlying = false;
            icon.opacity = Math.random() * 0.4 + 0.6;
          }
        }

        if (icon.type === 'comet' && !icon.isFlying && Math.random() > 0.998) {
          triggerComet(icon);
        }

        const relativeY = icon.y - scrollY;
        if (relativeY > -100 && relativeY < canvas.height + 100) {
          ctx.save();
          ctx.globalAlpha = icon.isFlying ? 1 : icon.opacity;

          const scale = icon.isFlying ? 1.2 : icon.z;
          const currentRadius = icon.radius * scale;

          ctx.shadowBlur = icon.isFlying ? 20 : 15;
          ctx.shadowColor = 'rgba(75, 53, 201, 0.8)';

          ctx.beginPath();
          ctx.arc(icon.x, relativeY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(25, 25, 50, 0.95)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(120, 120, 255, 0.9)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.shadowBlur = 0;

          if (icon.imageObj && icon.imageObj.complete) {
            ctx.drawImage(
              icon.imageObj,
              icon.x - currentRadius * 0.65,
              relativeY - currentRadius * 0.65,
              currentRadius * 1.3,
              currentRadius * 1.3
            );
          } else if (icon.isImageError) {
            ctx.fillStyle = '#ffffff';
            ctx.font = `${Math.floor(22 * scale)}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(icon.fallbackEmoji, icon.x, relativeY);
          }

          if (icon.isFlying) {
            const tailLength = 200;
            const angle = Math.atan2(icon.vy, icon.vx);
            ctx.beginPath();
            ctx.arc(icon.x, relativeY, currentRadius * 0.95, angle + Math.PI - 0.6, angle + Math.PI + 0.6);
            ctx.lineTo(icon.x - Math.cos(angle) * tailLength, relativeY - Math.sin(angle) * tailLength);
            ctx.closePath();
            const tailGrad = ctx.createLinearGradient(icon.x, relativeY, icon.x - Math.cos(angle) * tailLength, relativeY - Math.sin(angle) * tailLength);
            tailGrad.addColorStop(0, 'rgba(75, 53, 201, 0.8)');
            tailGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = tailGrad;
            ctx.fill();
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
    initStars();
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
