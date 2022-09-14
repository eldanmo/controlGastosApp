import { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (!presupuesto || presupuesto < 50 ) {
            setMensaje('Presupuesto invalido, debe ser un número mayor a 49')
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label htmlFor="presupuesto">Definir Presupuesto</label>

                <input 
                type="number"
                className="nuevo-presupuesto"
                placeholder="Añade tú presupuesto"
                id="presupuesto"
                value={presupuesto}
                onChange={(e)=>setPresupuesto(Number(e.target.value))}
                 />

            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        </form>
    </div>
  )
}

export default NuevoPresupuesto