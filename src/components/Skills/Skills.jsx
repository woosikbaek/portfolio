import React, { useEffect } from 'react';
import { FaReact, FaPython, FaLeaf, FaJava, FaDatabase, FaAws } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Flask', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Python', level: 75 },
      ],
    },
  ];

  const techItems = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaLeaf />, name: 'Flask' },
    { icon: <FaJava />, name: 'Spring' },
    { icon: <FaDatabase />, name: 'MySQL' },
    { icon: <FaAws />, name: 'AWS' },
  ];

  useEffect(() => {
    const skillItems = document.querySelectorAll(`.${styles.skillItem}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItem = entry.target;
            const skillLevel = skillItem.getAttribute('data-level');
            const progressBar = skillItem.querySelector(`.${styles.skillProgress}`);

            setTimeout(() => {
              if (progressBar) {
                progressBar.style.width = skillLevel + '%';
                setTimeout(() => {
                  progressBar.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
                }, 1000);
              }
            }, 500);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItems.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Technologies</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">현대적인 기술 스택으로 혁신적인 솔루션 구축</p>
        </div>

        <div className={styles.skillsContent}>
          <div className={styles.skillsCategories} data-aos="fade-right">
            {skillCategories.map((category) => (
              <div key={category.title} className={styles.skillCategory}>
                <h3>{category.title}</h3>
                <div className={styles.skillItems}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={styles.skillItem}
                      data-level={skill.level}
                    >
                      <span className={styles.skillName}>{skill.name}</span>
                      <div className={styles.skillBar}>
                        <div className={styles.skillProgress}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillsVisual} data-aos="fade-left">
            <div className={styles.techGrid}>
              {techItems.map((tech, index) => (
                <div
                  key={tech.name}
                  className={styles.techItem}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
