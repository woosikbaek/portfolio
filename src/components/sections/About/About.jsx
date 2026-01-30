import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import styles from './About.module.css';
import profileData from '../../../data/profile.json';

const About = memo(() => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className={styles.image}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%236366f1"%3EProfile%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h2 className={styles.title}>
                About <span className={styles.gradient}>Me</span>
              </h2>
              <p className={styles.subtitle}>{profileData.subtitle}</p>
              <p className={styles.bio}>{profileData.bio}</p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🎓</div>
                <div className={styles.highlightValue}>신입</div>
                <div className={styles.highlightLabel}>Junior Developer</div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🚀</div>
                <div className={styles.highlightValue}>2</div>
                <div className={styles.highlightLabel}>Team Projects</div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>💻</div>
                <div className={styles.highlightValue}>Full Stack</div>
                <div className={styles.highlightLabel}>Frontend + Backend</div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🔥</div>
                <div className={styles.highlightValue}>열정</div>
                <div className={styles.highlightLabel}>Passion to Learn</div>
              </div>
            </div>

            <div className={styles.actions}>
              <Button variant="primary" onClick={() => scrollToSection('contact')}>
                연락하기
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
