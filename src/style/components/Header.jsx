import React from 'react';
import Link from 'next/link';
import styles from '../Header.module.scss';

const Header = () => {
  return (
   <header className={styles.header}>
    <nav className={styles.nav}>
        <Link href="/">Logo</Link>
        <ul className={styles.ul}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/forms">Formulário</Link></li>
            <li><button>Sair</button></li>
        </ul>
    </nav>
   </header> 
  )
};

export default Header;