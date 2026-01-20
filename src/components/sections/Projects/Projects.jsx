import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Projects.module.css';
import projectsData from '../../../data/projects.json';

const Projects = () => {
  // 유튜브 ID 추출 함수
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <SectionTitle
          title="Projects"
          subtitle="2개의 팀 프로젝트를 통해 프론트엔드 개발과 IoT 하드웨어 경험을 쌓았습니다."
        />

        {projectsData.length > 0 ? (
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projectsData.map((project) => {
              const youtubeId = getYoutubeId(project.demo);

              return (
                <motion.div key={project.id} variants={cardVariants}>
                  <Card
                    interactive
                    className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                  >
                    {project.featured && (
                      <div className={styles.featuredBadge}>⭐ Featured</div>
                    )}

                    <div className={styles.mediaContainer}>
                      {youtubeId ? (
                        <iframe
                          className={styles.video}
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect width="400" height="240" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%236366f1"%3EProject Image%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          <div className={styles.overlay}>
                            <div className={styles.overlayContent}>
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.iconButton}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  🐙
                                </a>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className={styles.content}>
                      <div className={styles.header}>
                        <span className={styles.year}>{project.year}</span>
                        <h3 className={styles.title}>{project.title}</h3>
                        {project.role && (
                          <span className={styles.role}>🎯 {project.role}</span>
                        )}
                      </div>

                      <p className={styles.description}>{project.description}</p>

                      {project.highlights && project.highlights.length > 0 && (
                        <div className={styles.highlights}>
                          <h4 className={styles.highlightsTitle}>주요 성과</h4>
                          <ul className={styles.highlightsList}>
                            {project.highlights.map((highlight, index) => (
                              <li key={index} className={styles.highlightItem}>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className={styles.tags}>
                        {project.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className={styles.emptyState}>
            <h3>프로젝트를 추가해주세요</h3>
            <p>src/data/projects.json 파일을 수정하여 프로젝트를 추가할 수 있습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
