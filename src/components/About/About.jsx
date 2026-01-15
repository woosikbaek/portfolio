import React from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaArrowRight } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Innovation through Technology</h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText} data-aos="fade-right">
            <div className={styles.aboutIntro}>
              <h3>안녕하세요! 👋</h3>
              <p>저는 AI와 IoT 기술을 활용하여 스마트한 솔루션을 개발하는 풀스택 개발자입니다.</p>
            </div>

            <div className={styles.aboutFeatures}>
              <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.featureIcon}>
                  <FaRocket />
                </div>
                <div className={styles.featureContent}>
                  <h4>빠른 학습 & 적응</h4>
                  <p>새로운 기술을 빠르게 습득하고 실무에 적용합니다.</p>
                </div>
              </div>

              <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.featureIcon}>
                  <FaLightbulb />
                </div>
                <div className={styles.featureContent}>
                  <h4>문제 해결 중심</h4>
                  <p>실제 문제를 기술로 해결하는 데 집중합니다.</p>
                </div>
              </div>

              <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="300">
                <div className={styles.featureIcon}>
                  <FaUsers />
                </div>
                <div className={styles.featureContent}>
                  <h4>협업 & 커뮤니케이션</h4>
                  <p>팀원들과 원활하게 협업하며 프로젝트를 성공으로 이끕니다.</p>
                </div>
              </div>
            </div>

            <div className={styles.aboutCta} data-aos="fade-up" data-aos-delay="400">
              <button
                className={styles.btnOutline}
                onClick={() => scrollToSection('skills')}
              >
                <span>View Skills</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className={styles.aboutVisual} data-aos="fade-left">
            <div className={styles.glassCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span className={styles.cardDot}></span>
                  <span className={styles.cardDot}></span>
                  <span className={styles.cardDot}></span>
                </div>
                <span className={styles.cardTitle}>developer.json</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>"name"</span>
                  <span className={styles.codeColon}>:</span>
                  <span className={styles.codeString}>"백우식"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>"role"</span>
                  <span className={styles.codeColon}>:</span>
                  <span className={styles.codeString}>"Full Stack Developer"</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>"specialties"</span>
                  <span className={styles.codeColon}>:</span>
                  <span className={styles.codeArray}>["AI", "IoT", "Web"]</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>"experience"</span>
                  <span className={styles.codeColon}>:</span>
                  <span className={styles.codeNumber}>2</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeKey}>"available"</span>
                  <span className={styles.codeColon}>:</span>
                  <span className={styles.codeBoolean}>true</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
