import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Skills.module.css';
import skillsData from '../../../data/skills.json';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <SectionTitle
          title="Skills"
          subtitle="제가 사용하는 기술 스택과 도구들입니다."
        />

        <div className={styles.categoryGrid}>
          {skillsData.categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    {skill.iconClass ? (
                      <i className={`${skill.iconClass} ${styles.techIcon}`}></i>
                    ) : (
                      <span className={styles.emojiIcon}>{skill.emoji}</span>
                    )}
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
