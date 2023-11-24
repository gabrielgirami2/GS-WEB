import style from '../style/page.module.scss';
import React from 'react';
import Link from 'next/link';
import Header from '../style/components/Header'
import AboutProject from '../style/components/AboutProject'
import Footer from '../style/components/Footer'



export default function Home() {
  return (
    <>
    <Header/>

    
  <AboutProject/>
  
    <Footer/>
    </>
  )
}