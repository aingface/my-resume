import React from 'react';
import profileImage from '../assets/Images/profileImage.jpg';
import styles from '../styles/ProfilePicture.module.css';

const ProfilePicture: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src={profileImage} alt="Profile" className={styles.profileImage} />
    </div>
  );
};

export default ProfilePicture;
