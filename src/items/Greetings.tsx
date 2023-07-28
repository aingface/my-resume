import React from 'react';
import { Element } from 'react-scroll';
import styles from '../styles/Greetings.module.css';
import ProfilePicture from '../components/ProfilePicture';
import ContactBar from '../components/ContactBar';
function Greetings() {
  return (
    <Element name="introduce">
      <div className={styles.greetingsContainer}>
        <div className={styles.greetingsWrapper}>
          <div>
            <p className={styles.title}>
              안녕하세요
              <br /> Front-End Engineer
              <br />
              배대철입니다.
            </p>
            <p className={styles.discription}>
              아름답고 직관적인 UI를 구현하기 위해 고민하고 노력합니다.
              <br />
              지식을 공유할 때 함께 성장할 수 있다고 생각합니다.
              <br />
              Clean Code를 작성하기 위해 항상 고민하고 노력합니다.
              <br />
            </p>
          </div>
          <ProfilePicture />
        </div>
        <ContactBar />
      </div>
    </Element>
  );
}

export default Greetings;
