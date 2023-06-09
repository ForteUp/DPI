import React from 'react'
import "./Reportes.css";
import LogoUp from "./img/UP_CH1.jpg";
import LogoAseroria from "./img/logo-au-final.jpg";

function Reportes() {
  return (
    <div className='body-reportes'>
        <div className='logos-reportes'>
            <img className='logo-up' src={LogoUp} alt=""/>
            <div className='text-logos'>
                <p className='txt-logo1'>FORTALECIMIENTO ACADÉMICO</p>
                <p className='txt-logo2'>Diagnóstico de perfil individual (DPI)</p>
                <p className='txt-logo3'>CDMX - GUADALAJARA - AGUASCALIENTES</p>
            </div>
            <img className='logo-asesoria' alt='' src={LogoAseroria}/>
        </div>
        <div className='datosPersonales'>
            <p className='txt-Nombre'>Nombre: </p>
            <p className='txt-ID'>ID: </p>
            <p className='txt-Sexo'>Sexo: </p>
            <p className='txt-Carrera'>Carrera: </p>
            <p className='txt-Fecha'>Fecha de aplicación: </p>
        </div>
    </div>
  )
}

export default Reportes