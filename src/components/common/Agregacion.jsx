import React from 'react'
import { useEffect,useState } from 'react'

const Agregacion = () => {
    const [show, setShow] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShow(false)
        },5000);
        return () => clearTimeout(timer)
    }, [])

  return (
    <div>
        {show ? (
            <h2>El medico ya se encuentra registrado</h2>
        ):(
            <h2>Medico agregado correctamente</h2>
        )}
    </div>
  )
}

export default Agregacion