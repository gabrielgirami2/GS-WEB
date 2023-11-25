import React from 'react';
import styles from '../Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 TechVida LTDA</p>
      <div className={styles.team}>
          <p>Work Team: </p>
          <p>Gabriel Girami | RM: 98017 | 1TDSPZ | Responsive Web Development</p>
          <p>Gustavo Vinhola | RM:  | 1TDSPZ | AI & Chatbot</p>
          <p>Felipe Bernardes | RM:  | 1TDSPZ | Computational Thinking Using Python</p>
          <p>Felipe Pinheiro | RM: 550244 | 1TDSPZ | Java and Software Design E Total Experience</p>
          <p>Victor Fanfoni | RM: 99173  | 1TDSPZ | Building Relational Database</p>
      </div>
    </footer>
  );
};

export default Footer;
