import { useState, useEffect } from "react"

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor" >
        <form>
            <div className="campo">
                <label htmlFor="filtro">Filtrar Gastos</label>
                <select name="filtro" id="filtro" value={filtro} onChange={(e)=>setFiltro(e.target.value)}>
                    <option value="">-- Todo --</option>
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
        </form>
    </div>
  )
}

export default Filtros