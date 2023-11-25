import React from 'react';
import styles from '../Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 BioConnect LTDA</p>
      <div className={styles.team}>
          <p>Work Team: </p>
          <p>Gabriel Girami | RM: 98017 | 1TDSPZ | Responsive Web Development</p>
          <p>Gustavo Vinhola | RM: 98826 | 1TDSPZ | AI & Chatbot</p>
          <p>Felipe Bernardes | RM: 98866 | 1TDSPZ | Computational Thinking Using Python</p>
          <p>Felipe Pinheiro | RM: 550244 | 1TDSPZ | Java and Software Design E Total Experience</p>
          <p>Victor Fanfoni | RM: 99173  | 1TDSPZ | Building Relational Database</p>
      </div>
    </footer>
  );
};

export default Footer;
