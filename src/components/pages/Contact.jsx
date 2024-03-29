import React, {useEffect, useState } from 'react';
import styles from "../styles/contact.module.css";
import { GlobalThemes } from '../utils/context/GlobalThemesProvider';
import { useContext } from 'react';
export const Contact = () => {
  const { theme } = useContext(GlobalThemes);

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name && user.email) {
      setShow(true);
      setErr(false);
    } else if(user.name.length) {
      setErr(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
        setUser({ name: "", email: "" });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className={styles.container} style={{ color: theme.home.font, backgroundColor: theme.home.backGround }}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.containerInput}>
          <input
            className={styles.inputForm}
            type="text"
            name='name'
            placeholder='Your Name'
            value={user.name}
            onChange={handleChange}
          />
          <input
            className={styles.inputForm}
            type="email"
            name='email'
            placeholder='Your Email'
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.containerButton}>
          <button type='submit' className={styles.btn}>Enviar</button>
        </div>
      </form>
      <div className={styles.containerMensaje}>
        {show ? (
          <div>
            <h1>Gracias {user.name}</h1>
            <h1>Tu correo {user.email} fue recibido correctamente</h1>
          </div>
        ) : (
          <div className={styles.mensajeBienvenida}>
            <p>Coloque sus datos para obtener las ultimas actualizaciones.</p>
            {err && <p style={{ color: 'red' }}>Debe colocar la información correctamente</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact
