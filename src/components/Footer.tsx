import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerP}>© {new Date().getFullYear()} All rights are reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
