import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../common/Button/Button';
import styles from './Hero.module.css';
import profileData from '../../../data/profile.json';

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.15]);
  const imgFilter = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["grayscale(0%) blur(0px)", "grayscale(20%) blur(2px)"]
  );
  const bgZIndex = useTransform(scrollYProgress, [0, 0.4, 0.41], [100, 100, 0]);

  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.8], [1, 0]);
  const bgColor = useTransform(bgOpacity, (v) => `rgba(0, 0, 0, ${v})`);

  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  const guideOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={targetRef} className={styles.heroWrapper}>
      <section id="home" className={styles.hero}>
        <motion.div
          className={styles.heroBackground}
          style={{
            zIndex: bgZIndex,
            backgroundColor: bgColor
          }}
        >
          <motion.img
            src="/profileImage/wookisImage_OP.png"
            alt="Intro Profile"
            className={styles.heroBackgroundImage}
            style={{
              scale: imgScale,
              opacity: imgOpacity,
              filter: imgFilter
            }}
          />

          <motion.div
            className={styles.scrollGuide}
            style={{ opacity: guideOpacity }}
          >
            <p className={styles.scrollText}>Scroll down to enter</p>
          </motion.div>
        </motion.div>

        <div className={styles.container}>
          <motion.div
            className={styles.content}
            style={{
              opacity: contentOpacity,
              y: contentY
            }}
          >
            <motion.p className={styles.greeting}>Hello, I'm</motion.p>

            <motion.h1 className={styles.title}>
              {profileData.name} <br />
              <span className={styles.gradient}>{profileData.title}</span>
            </motion.h1>

            <motion.p className={styles.description}>
              {profileData.bio.split('.')[0]}.
            </motion.p>

            <motion.div className={styles.actions}>
              <Button variant="primary" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollIndicator}
          style={{ opacity: contentOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => scrollToSection('about')}
        >
          <span className={styles.scrollText}>Scroll Down</span>
          <svg className={styles.scrollIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
