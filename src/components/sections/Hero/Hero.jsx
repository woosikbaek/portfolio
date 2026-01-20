import React from 'react';
import Button from '../../common/Button/Button';
import styles from './Hero.module.css';
import profileData from '../../../data/profile.json';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={`${styles.backgroundCircle} ${styles.circle1}`}></div>
        <div className={`${styles.backgroundCircle} ${styles.circle2}`}></div>
        <div className={`${styles.backgroundCircle} ${styles.circle3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>👋 안녕하세요!</p>
          <h1 className={styles.title}>
            저는 <span className={styles.gradient}>{profileData.name}</span>입니다
          </h1>
          <p className={styles.subtitle}>{profileData.title}</p>
          <p className={styles.description}>
            {profileData.bio}
          </p>
          <div className={styles.buttons}>
            <Button variant="primary" size="large" onClick={() => scrollToSection('projects')}>
              프로젝트 보기
            </Button>
            <Button variant="secondary" size="large" onClick={() => scrollToSection('contact')}>
              연락하기
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} onClick={() => scrollToSection('about')}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
