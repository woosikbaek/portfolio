import React from 'react';
import { FaYoutube, FaRoad, FaCar, FaArrowRight } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI 도로안전망 시스템',
      date: '2025.10 - 2025.11',
      description:
        'AI 기반 위험 구간 감지 및 커뮤니티 피드 기능을 제공하는 도로 안전 정보 공유 플랫폼',
      icon: <FaRoad />,
      badge: 'Latest',
      tech: ['React', 'Flask', 'AI', 'Leaflet', 'PostgreSQL'],
      features: ['지도 기반 경로탐색', '커뮤니티 피드', '카카오페이 결제'],
      link: 'https://www.youtube.com/watch?v=Y5KoIeUuco0',
    },
    {
      id: 2,
      title: 'AI 스마트팩토리 자동차 검사',
      date: '2025.12 - 2026.01',
      description:
        'IoT 기반 자동차 품질 검사 시스템으로 센서와 카메라를 활용한 실시간 검사 및 AI 기반 결함 탐지',
      icon: <FaCar />,
      tech: ['React', 'Flask', 'Spring Boot', 'MQTT', 'MySQL'],
      features: ['IoT 센서 통합', '실시간 검사', 'AI 결함 탐지'],
      link: 'https://www.youtube.com/watch?v=gPBmVkVSfhc',
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">최신 기술을 활용한 혁신적인 프로젝트들</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.projectImage}>
                {project.badge && <div className={styles.projectBadge}>{project.badge}</div>}
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FaYoutube />
                    </a>
                  </div>
                </div>
                <div className={styles.projectVisual}>{project.icon}</div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectFeatures}>
                  {project.features.map((feature) => (
                    <span key={feature} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.projectsCta} data-aos="fade-up" data-aos-delay="300">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('skills')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gradient-1)',
              color: 'white',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <span>View All Skills</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
