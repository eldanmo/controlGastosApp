import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    },[gastoEditar])

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')) {
            setMensaje('todos los campos son obligatorios')

            setTimeout(()=> {
                setMensaje('')
            },5000)
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <p onClick={ocultarModal} className='cerrando-modal'>x</p>
            
        </div>

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`} onSubmit={handleSubmit} >
            <legend>{gastoEditar.nombre ? 'editar gasto' : 'Nuevo Gasto'} </legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" id='nombre' placeholder='Añade nombre del gasto' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad Gasto</label>
                <input type="text" id='number' placeholder='Añade cantidad del gasto' value={cantidad} onChange={(e)=>setCantidad(Number(e.target.value))} />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoría Gasto</label>
                <select name="categoria" id="categoria" value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="casa">Casa</option>
                    <option value="comida">comida</option>
                    <option value="ocio">ocio</option>
                    <option value="salud">salud</option>
                    <option value="suscripciones">suscripciones</option>
                    <option value="gastosVarios">gastos varios</option>
                    <option value="transporte">Transporte</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? 'Guardar cambios' : 'añadir Gasto'} />
        </form>
    </div>
  )
}

export default Modal