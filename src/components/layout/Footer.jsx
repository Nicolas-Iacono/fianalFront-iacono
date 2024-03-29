import React from 'react'
import styles from "../styles/footer.module.css"
import dhImg from "../../../public/images/DH.png"
import facebook from "../../../public/images/ico-facebook.png"
import instagram from "../../../public/images/ico-instagram.png"
import tiktok from "../../../public/images/ico-tiktok.png"
import phone from "../../../public/images/ico-whatsapp.png"
import { GlobalThemes } from '../utils/context/GlobalThemesProvider'
import { useContext } from 'react'
export const Footer = () => {
    const {theme} = useContext(GlobalThemes)
    return (
        
           
                <div className={styles.container} style={{background: theme.footer.backGround}}>
                    <div className={styles.logo}>
                    <h1>Powered by</h1>
                    <img src={dhImg} alt='DH-logo' />
                    </div>
                 
                    
                    
                    <div className={styles.redes}>
                    <img src={facebook} alt="" />
                    <img src={phone} alt="" />
                    <img src={instagram} alt="" />
                    <img src={tiktok} alt="" />
                    </div>
                
                </div>
                
               
            
     
    
    )
    }

export default Footer;