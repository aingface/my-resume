import React from 'react';
import { FaGithub, FaBlog, FaEnvelope } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <div className="contactBar">
      <a href="https://github.com/aingface" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} style={{ marginRight: '10px' }} />
      </a>
      <a href="https://aingface.tistory.com/" target="_blank" rel="noopener noreferrer">
        <FaBlog size={25} style={{ marginRight: '10px' }} />
      </a>
      <a href="mailto:qoeocjf5@gmail.com">
        <FaEnvelope size={25} />
      </a>
    </div>
  );
};

export default ContactBar;
