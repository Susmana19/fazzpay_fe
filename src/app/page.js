'use client';

import styles from './page.module.css'
import NavbarAuth from './components/navbarauth'
import HeroBanner1 from './components/herobanner1'
import Company from './components/company'

export default function Home() {
  return (
    <>
      <NavbarAuth/>
      <HeroBanner1/>
      <Company/>
    </>
  )
}
