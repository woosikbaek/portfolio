import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Experience.module.css';
import experienceData from '../../../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <SectionTitle
          title="Experience"
          subtitle="저의 경력과 성장 과정을 소개합니다."
        />

        {experienceData.length > 0 ? (
          <div className={styles.timeline}>
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className={`${styles.timelineItem} ${exp.current ? styles.current : ''}`}
              >
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.position}>{exp.position}</p>
                    </div>
                    <span className={styles.period}>
                      {exp.period}
                      {exp.current && ' (현재)'}
                    </span>
                  </div>

                  <p className={styles.description}>{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className={styles.achievements}>
                      <h4 className={styles.achievementsTitle}>주요 성과</h4>
                      <ul className={styles.achievementsList}>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className={styles.achievementItem}>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className={styles.skills}>
                      {exp.skills.map((skill, index) => (
                        <span key={index} className={styles.skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>준비중입니다.</h3>
            {/* <p>src/data/experience.json 파일을 수정하여 경력을 추가할 수 있습니다.</p> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
