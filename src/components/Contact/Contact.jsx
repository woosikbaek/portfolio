import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">함께 혁신적인 프로젝트를 만들어나가요</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo} data-aos="fade-right">
            <div className={styles.contactHeader}>
              <h3>Contact Information</h3>
              <p>언제든지 연락 주세요. 최대한 빠르게 회신드리겠습니다.</p>
            </div>

            <div className={styles.contactItems}>
              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Phone</h4>
                  <a href="tel:+821054445655">010-5444-5655</a>
                </div>
              </div>

              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <a href="mailto:woosikbaek@gmail.com">woosikbaek@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="300">
                <div className={styles.contactIcon}>
                  <FaGithub />
                </div>
                <div className={styles.contactDetails}>
                  <h4>GitHub</h4>
                  <a href="https://github.com/woosikbaek" target="_blank" rel="noopener noreferrer">
                    github.com/woosikbaek
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks} data-aos="fade-up" data-aos-delay="400">
              <a href="#" className={styles.socialLink} title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink} title="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} title="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.contactForm} data-aos="fade-left">
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  className={styles.formInput}
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.btnFull}>
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
