import React from 'react';
import Link from 'next/link';
import styles from '../Header.module.scss';
import Button, { SignOutButton } from '../components/Sign-out-button'
import { getServerSession } from 'next-auth'

const Header = async () => {
  const session = await getServerSession()
  return (
   <header className={styles.header}>
    <nav className={styles.nav}>
        <Link href="/">Logo</Link>
        <ul className={styles.ul}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/public">Login</Link></li>
            <li><Link href="/private">Formulário</Link></li>
            {session &&
            <li><SignOutButton>Sair</SignOutButton></li>
            }
        </ul>
    </nav>
   </header> 
  )
};

export default Header;