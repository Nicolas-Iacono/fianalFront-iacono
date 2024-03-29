import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { getUsersById } from '../utils/api/api'
import styles from "../styles/detail.module.css"
import img from "../../../public/images/doctor.jpg"
import { UseProductStates } from "../utils/context/ProductContext";
import star from "../../../public/images/star.png"
import { GlobalThemes } from '../utils/context/GlobalThemesProvider';
import { useContext } from 'react';
export const Detail = () => {
    const {id} =  useParams();
    const[userSelected, setUserSelected] = useState({})
    const {favs,setFavs} = UseProductStates()
    const { theme } = useContext(GlobalThemes);
    
    console.log(favs)
    const [error, setError] = useState(false)
    const [show, setShow] = useState(false)


    const handleClick = () => {
        if (favs.some((fav) => fav.id === userSelected.id)) {
           setError(true)
           setShow(true)
        } else{
            setFavs(prevFavs => [...prevFavs, userSelected]);
            setError(false)
        }
    }
console.log(error)

  
    
       


    useEffect(()=>{
        const obtenerInfo = async() =>{
            let userData= await getUsersById(id);
            setUserSelected(userData)
        }
        obtenerInfo()
    },[id])


  return (
    <div className={styles.container}  style={{backgroundColor:theme.home.backGround, color: theme.home.font}}>
        
        <div className={styles.imagen}>
            <img src={img} alt="" />
        </div>

        <div className={styles.infoPersonal}>
            
            <h1 className={styles.titulo}>Detalle</h1>
            <h1 className={styles.info}>nombre: <span className={styles.span}>{userSelected.name}</span></h1>
            <h2 className={styles.info}>apellido: <span className={styles.span}>{userSelected.username}</span> </h2>
            <h3 className={styles.info}>telefono: <span className={styles.span}>{userSelected.phone}</span> </h3>
            <h2 className={styles.info}>email: <span className={styles.span}>{userSelected.email}</span> </h2>
            
           

            <div className={styles.button}>
          <button  className={styles.estrella} onClick={handleClick}>
            <img src={star} alt="" />
          </button>
          {error ? <>
            <h2 className={styles.textoA}>El medico ya se encuentra en favoritos</h2> 
        </>:<h3 className={styles.textoV}> Agrega este medico a tu lista de favs</h3>
        }
        </div>

        </div>
     
    </div>

   
  )
}
export default Detail