import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Experience.module.css';
import experienceData from '../../../data/experience.json';

const Experience = memo(() => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <SectionTitle
          title="Experience"
          subtitle="실무 경험 및 교육 이력입니다."
        />

        {experienceData.length > 0 ? (
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <h4 className={styles.position}>{exp.role || exp.position}</h4>
                    </div>
                    <div className={styles.period}>{exp.period}</div>
                  </div>

                  <p className={styles.description}>{exp.description}</p>

                  {exp.achievements && (
                    <div className={styles.achievements}>
                      <ul className={styles.achievementsList}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={styles.achievementItem}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className={styles.emptyState}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>준비중입니다.</h3>
          </motion.div>
        )}
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';
export default Experience;
