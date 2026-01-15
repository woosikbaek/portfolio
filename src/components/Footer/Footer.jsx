import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand} data-aos="fade-right">
          <h3>BaekWooSik</h3>
          <p>AI & IoT 기반 스마트 솔루션 개발자</p>
        </div>

        <div className={styles.footerLinks} data-aos="fade-up">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.footerSocial} data-aos="fade-left">
          <a href="https://github.com/woosikbaek" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="#" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 BaekWooSik. All rights reserved.</p>
        <p>Made with ❤️ and modern web technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
