import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Skills.module.css';
import skillsData from '../../../data/skills.json';

const Skills = () => {
  // Force re-render check
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <SectionTitle
          title="Skills"
          subtitle="다양한 기술 스택을 활용하여 프로젝트를 완성합니다."
        />

        <motion.div
          className={styles.categoryGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.categories.map((category, index) => (
            <motion.div key={index} className={styles.categoryCard} variants={itemVariants}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    {skill.image ? (
                      <img src={skill.image} alt={skill.name} className={styles.skillImage} />
                    ) : skill.iconClass ? (
                      <i className={`${skill.iconClass} ${styles.techIcon}`}></i>
                    ) : (
                      <span className={styles.emojiIcon}>{skill.emoji}</span>
                    )}
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
