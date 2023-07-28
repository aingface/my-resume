import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../styles/DarkModeToggle.module.css';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className={styles.toggleContainer}>
      <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
      <span className={styles.slider + ' round'}></span>
    </label>
  );
};

export default DarkModeToggle;
