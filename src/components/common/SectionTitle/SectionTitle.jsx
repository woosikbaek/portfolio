import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  showDecorator = true,
  className = ''
}) => {
  const containerClasses = [
    styles.sectionTitle,
    styles[align],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showDecorator && (
        <div className={styles.decorator}>
          <div className={styles.line}></div>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
