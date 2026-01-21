import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Hero와 싱크를 맞추기 위한 전역 스크롤 감지
  // Hero의 wrapper가 200vh이므로, 대략 그 비율에 맞춰서 나타나게 함
  const { scrollY } = useScroll();

  // Hero에서 컨텐츠가 나타나는 타이밍(0.4 -> 0.6)과 일치시키기 위해
  // 100vh(화면 높이) 기준으로 약 80vh 지점부터 나타나기 시작
  const headerOpacity = useTransform(scrollY, [0, window.innerHeight * 0.8, window.innerHeight * 1.2], [0, 0, 1]);
  const headerY = useTransform(scrollY, [0, window.innerHeight * 0.8, window.innerHeight * 1.2], [-20, -20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYPos = window.scrollY;
      setIsScrolled(scrollYPos > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = scrollYPos + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      style={{
        opacity: headerOpacity,
        y: headerY
      }}
    >
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('home')}>
          <img src="/profileImage/wookisImage.png" alt="Logo" className={styles.logoImage} />
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerRight}>
          <button
            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
