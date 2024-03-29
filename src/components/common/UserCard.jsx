import {Link} from "react-router-dom";
import React, { useContext } from 'react'
import img from "../../../public/images/doctor.jpg"
import styles from "../styles/userCard.module.css"
import { GlobalThemes } from "../utils/context/GlobalThemesProvider";
export const UserCard = ({user}) => {
  const {theme} = useContext(GlobalThemes)
    
  return (
    <div className={styles.container}  style={{ color: theme.card.font, background: theme.card.backGround, border: theme.card.border }}>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.nombreCont} style={{ color: theme.button.font, background: theme.button.backGround}}>
            <Link to={`/detalle/${user.id}`}><h1 className={styles.nombre} style={{ color: theme.button.font, background: theme.button.backGround}}>{user.name}</h1></Link>
        </div>
       
    </div>
  )
}
export default UserCard