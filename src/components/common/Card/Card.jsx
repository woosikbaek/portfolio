import React from 'react';
import styles from './Card.module.css';

const Card = ({
  children,
  variant = 'default',
  padding = 'default',
  interactive = false,
  className = '',
  onClick,
  ...props
}) => {
  const cardClasses = [
    styles.card,
    variant !== 'default' && styles[variant],
    padding !== 'default' && styles[`${padding}Padding`],
    interactive && styles.interactive,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Sub-components
Card.Header = ({ title, subtitle, className = '' }) => (
  <div className={`${styles.header} ${className}`}>
    {title && <h3 className={styles.title}>{title}</h3>}
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);

Card.Content = ({ children, className = '' }) => (
  <div className={`${styles.content} ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>
    {children}
  </div>
);

export default Card;
