import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Experience.module.css';
import experienceData from '../../../data/experience.json';

const Experience = () => {
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.period}>{exp.period}</div>
                  <h3 className={styles.role}>{exp.role || exp.position}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <p className={styles.description}>{exp.description}</p>

                  {exp.achievements && (
                    <ul className={styles.achievements}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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
            {/* <p>src/data/experience.json 파일을 수정하여 경력을 추가할 수 있습니다.</p> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
