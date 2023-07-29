import React from 'react';
import styles from '../styles/Skills.module.css';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h4 className={styles.skillsTitle}>Skills</h4>
      <ul>
        <li>JavaScript/TypeScript</li>
        <li>Redux</li>
        <li>Git</li>
        <li>꾸준히 학습하고 성장하기 위한 마음가짐</li>
      </ul>
    </div>
  );
}

export default Skills;
