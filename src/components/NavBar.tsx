import React, { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';
import DarkModeToggle from '../components/DarkModeToggle';
import { Link } from 'react-scroll';
import { scrollToTop } from '../utils/scrollUtils';

function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  useEffect(() => {
    // 스크롤 이벤트 핸들러 등록
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 스크롤 위치가 0보다 크면(스크롤이 발생하면) 배경 색 변경
      setScrolling(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.Container} ${scrolling ? styles.scrolling : ''}`}>
      <div className={styles.scrollToTopBtn} onClick={scrollToTop}>
        aingface
      </div>
      <div className={styles.MenuWrapper}>
        <Link to="introduce" smooth={true} duration={0}>
          <div>Introduce</div>
        </Link>
        <Link to="projectExperience" smooth={true} duration={0}>
          <div>Work Experience</div>
        </Link>
        <Link to="otherExperience" smooth={true} duration={0}>
          <div>Other Experience</div>
        </Link>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default NavBar;
