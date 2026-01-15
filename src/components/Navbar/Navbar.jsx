import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setMenuActive(false);
    }
  };

  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} data-aos="fade-down">
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <a href="#home" onClick={() => scrollToSection('home')} style={{ textDecoration: 'none' }}>
            <span className={styles.logoText}>BaekWooSik</span>
            <span className={styles.logoDot}></span>
          </a>
        </div>

        <ul className={`${styles.navMenu} ${menuActive ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`${styles.navLink} ${activeSection === item ? styles.active : ''}`}
                onClick={() => scrollToSection(item)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.themeToggle}>
          <button className={styles.themeBtn} onClick={handleThemeToggle} title="Toggle Theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div
          className={`${styles.hamburger} ${menuActive ? styles.active : ''}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className={styles.hamburgerSpan}></span>
          <span className={styles.hamburgerSpan}></span>
          <span className={styles.hamburgerSpan}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
