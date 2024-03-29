import Navbar from "./Navbar"
import React from 'react'
import { Outlet } from 'react-router-dom'
import  Footer from './Footer';
import styles from "../styles/layout.module.css"
export const Layo = () => {
  return (
    <div className={styles.container}>
        
        <Navbar className={styles.nav}/>
        <Outlet className={styles.contenido}/>
        <Footer className={styles.footer}/>
    </div>
 
  )
}

export default Layo