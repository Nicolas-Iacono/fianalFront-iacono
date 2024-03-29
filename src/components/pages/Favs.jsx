import React, { useContext } from 'react'
import { UseProductStates } from '../utils/context/ProductContext'
import UserFav from '../common/UserFav'
import styles from "../styles/userFav.module.css"
import { GlobalThemes } from '../utils/context/GlobalThemesProvider'
const Favs = () => {
  const {favs,setFavs} = UseProductStates()
  const {theme} = useContext(GlobalThemes)


  console.log(favs)
 const tabla = favs.map((fav) => {
  console.log(fav)
        
    
  });
  
  return (
<div className={styles.container } style={{ color: theme.home.font, background: theme.home.backGround }}>
      <table className={styles.tabla}>
        <thead className={styles.encabezado}>
          <tr className={styles.filaEncabezado} style={{ color: theme.home.font, background: theme.home.backGround }}>
            <th className={styles.datoEncabezado}>id</th>
            <th className={styles.datoEncabezado}>nombre</th>
            <th className={styles.datoEncabezado}>email</th>
            <th className={styles.datoEncabezado}>telefono</th>
            <th className={styles.datoEncabezado}>compania</th>
            <th className={styles.datoEncabezado}>domicilio</th>
            <th className={styles.datoEncabezado}>website</th>
          </tr>
        </thead>
        <tbody className={styles.cuerpo}>
          {favs.map((fav) => (
            <UserFav key={fav.id} fav={fav} />
          ))}
        </tbody>
      </table>
</div>
    
  )
}

export default Favs