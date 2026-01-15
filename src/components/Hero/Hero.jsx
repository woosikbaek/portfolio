import React, { useEffect } from 'react';
import { FaArrowRight, FaComment, FaCode, FaBrain, FaNetworkWired } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles-hero');
    if (particlesContainer) {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;

        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = Math.random() * 15 + 10 + 's';
        particle.style.opacity = Math.random() * 0.8 + 0.2;

        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientBg}>
          <div className={`${styles.gradient} ${styles.gradient1}`}></div>
          <div className={`${styles.gradient} ${styles.gradient2}`}></div>
          <div className={`${styles.gradient} ${styles.gradient3}`}></div>
        </div>
        <div className={styles.auroraContainer}>
          <div className={styles.aurora}></div>
        </div>
        <div className={styles.particles} id="particles-hero"></div>
      </div>

      <div className={styles.heroContent} data-aos="fade-up">
        <div className={styles.heroBadge} data-aos="fade-down" data-aos-delay="200">
          <span>Available for work</span>
          <div className={styles.badgeDot}></div>
        </div>

        <h1 className={styles.heroTitle} data-aos="fade-up" data-aos-delay="300">
          <span className={styles.titleLine}>AI & IoT 기반</span>
          <span className={`${styles.titleLine} ${styles.highlight}`}>스마트 솔루션</span>
          <span className={styles.titleLine}>개발자</span>
        </h1>

        <p className={styles.heroDescription} data-aos="fade-up" data-aos-delay="400">
          React, Flask, Spring Boot를 활용한 풀스택 개발<br />
          실시간 데이터 처리와 AI 기반 시스템 구축 전문
        </p>

        <div className={styles.heroStats} data-aos="fade-up" data-aos-delay="500">
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </div>

        <div className={styles.heroButtons} data-aos="fade-up" data-aos-delay="600">
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => scrollToSection('projects')}
          >
            <span>View Projects</span>
            <FaArrowRight />
          </button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => scrollToSection('contact')}
          >
            <FaComment />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>

      <div className={styles.heroVisual} data-aos="fade-left" data-aos-delay="700">
        <div className={styles.floatingCard}>
          <div className={styles.cardIcon}>
            <FaCode />
          </div>
          <div className={styles.cardContent}>
            <h4>Full Stack</h4>
            <p>Frontend to Backend</p>
          </div>
        </div>

        <div className={styles.floatingCard} style={{ animationDelay: '-2s' }}>
          <div className={styles.cardIcon}>
            <FaBrain />
          </div>
          <div className={styles.cardContent}>
            <h4>AI/ML</h4>
            <p>Machine Learning</p>
          </div>
        </div>

        <div className={styles.floatingCard} style={{ animationDelay: '-4s' }}>
          <div className={styles.cardIcon}>
            <FaNetworkWired />
          </div>
          <div className={styles.cardContent}>
            <h4>IoT</h4>
            <p>Internet of Things</p>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} data-aos="fade-up" data-aos-delay="800">
        <div className={styles.scrollText}>Scroll to explore</div>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;
