import React, { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css";
import { getUsers } from '../utils/api/api';
import  UserCard from '../common/UserCard';
import { useContext } from 'react';
import { GlobalThemes } from '../utils/context/GlobalThemesProvider';
const Home = () => {
    const [users, setUsers]=useState([]);
 
 useEffect(()=>{
    const obtenerDatos = async()=>{
        let usersData = await getUsers()
        setUsers(usersData)
        console.log(users)
    }
    obtenerDatos()
    
 },[])
  const {theme} = useContext(GlobalThemes)
    
        return (
        <div className={styles.home} style={{ color: theme.home.font, background: theme.home.backGround }}>
        <h1 className={styles.titulo}>HOME</h1>
        
        <div className={styles.containerGrid}>
        {users.map((user)=>{
            return <UserCard user={user} key={user.id}/>
        })}


    </div>

        </div>
   
  )
}

export default Home