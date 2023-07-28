import React from 'react';
import styles from '../styles/NavBar.module.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MenuWrapper}>
        <Link to="introduce" smooth={true} duration={500}>
          <div>Introduce</div>
        </Link>
        <Link to="projectExperience" smooth={true} duration={500}>
          <div>Project Experience</div>
        </Link>
        <Link to="otherExperience" smooth={true} duration={500}>
          <div>Other Experience</div>
        </Link>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default NavBar;
