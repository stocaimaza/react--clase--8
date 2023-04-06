/*LOS RENDER PROPS */
//Son una técnica de composición de componentes. Que me permite enviar la interfaz a ser renderizada en una función aparte. 

import { useState } from "react"
import InicioSesion from "./InicioSesion";
import LoginButton from "./LoginButton";


const Loguear = () => {
    const [usuario, setUsuario] = useState(null);

    const manejadorLogin = () => {
        setUsuario("Samuel");
    }

  return (
    <div>
        {
            usuario ? (<InicioSesion nombre={usuario} /> ) : (<LoginButton loguear={manejadorLogin} />)
        }
      
    </div>
  )
}

export default Loguear
