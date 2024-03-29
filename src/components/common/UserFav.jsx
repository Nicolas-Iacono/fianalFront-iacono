import React from 'react'
import styles from "../styles/userFav.module.css"
const UserFav = ({fav}) => {
  return (
        
        <tr className={styles.fila}>
      <td className={styles.dato}>{fav.id}</td>
      <td className={styles.dato}>{fav.name}</td>
      <td className={styles.dato}>{fav.email}</td>
      <td className={styles.dato}>{fav.phone}</td>
      <td className={styles.dato}>{fav.company.name}</td>
      <td className={styles.dato}>{fav.address.street}</td>
      <td className={styles.dato}>{fav.website}</td>
        </tr>
        
                
          
  )
}

export default UserFav


// export const UserCard = ({user}) => {

//     return (
//       <div className={styles.container}>
//           <img className={styles.img} src={img} alt="" />
//           <div className={styles.nombreCont}>
//               <Link to={`/detalle/${user.id}`}><h1 className={styles.nombre}>{user.name}</h1></Link>
//           </div>
//           <div className={styles.button}>
//             <button onClick={() => setFavs([...favs],user)}>⭐</button>
//           </div>
//       </div>
//     )
//   }
//   export default UserCard