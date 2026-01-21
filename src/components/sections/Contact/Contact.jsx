import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import styles from './Contact.module.css';
import profileData from '../../../data/profile.json';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다! (실제 서비스 연동 시 메시지가 전달됩니다)');
    setFormData({ name: '', email: '', message: '' });
  };

  const instagramPath = "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5Z";

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle
          title="Get In Touch"
          subtitle="프로젝트 문의나 협업 제안이 있으시다면 언제든 연락주세요!"
        />

        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h3 className={styles.infoTitle}>Let's work together</h3>
              <p className={styles.infoDescription}>
                새로운 프로젝트나 아이디어에 대해 이야기 나누고 싶으시다면
                아래 연락처로 편하게 연락주세요.
              </p>
            </div>

            <div className={styles.contactMethods}>
              <a href={`mailto:${profileData.email}`} className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>Gmail</div>
                  <div className={styles.methodValue}>woosikbaek@gmail.com</div>
                </div>
              </a>

              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>GitHub</div>
                  <div className={styles.methodValue}>github.com/woosikbaek</div>
                </div>
              </a>

              <a href={profileData.instagram} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d={instagramPath} />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>Instagram</div>
                  <div className={styles.methodValue}>woosikbaek</div>
                </div>
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href={`mailto:${profileData.email}`} className={styles.socialLink} title="Gmail">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={profileData.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={instagramPath} />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>메시지</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>

            <Button type="submit" variant="primary" className={styles.submitButton}>
              메시지 보내기
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
