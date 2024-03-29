import React, { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-scroll';
import { scrollToTop } from '../utils/scrollUtils';
import { FaHamburger } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 스크롤 위치가 0보다 크면(스크롤이 발생하면) 배경 색 변경
      setScrolling(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    console.log('햄버거 버튼 누름, 상태:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles.container} ${scrolling ? styles.scrolling : ''} ${
        isMenuOpen ? styles.open : ''
      }`}
    >
      <div className={styles.scrollToTopBtn} onClick={scrollToTop}>
        aingface
      </div>
      <div className={`${styles.menuListWrapper} ${isMenuOpen ? styles.open : ''}`}>
        <Link to="projectExperience" smooth={true} duration={0}>
          <div className={styles.NavBarMenuItem}>Work Experience</div>
        </Link>
        <Link to="otherExperience" smooth={true} duration={0}>
          <div className={styles.NavBarMenuItem}>Other Experience</div>
        </Link>
      </div>
      <div className={styles.hamburgerIcon}>
        <FaHamburger
          size={25}
          onClick={handleMenuToggle}
          className={`${styles.faHamburger} ${isMenuOpen ? styles.open : ''}`}
        />
        <ImCancelCircle
          size={25}
          onClick={handleMenuToggle}
          className={`${styles.imCancelCircle} ${isMenuOpen ? '' : styles.close}`}
        />
      </div>
    </nav>
  );
}

export default NavBar;
