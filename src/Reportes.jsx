import React from 'react'
import "./Reportes.css";
import LogoUp from "./img/LogoUniversidad.png";
import ImgCaracter from "./img/inalterable 2.png";
import Medio from "./img/Medio.png";
import Conocimiento from "./img/Vector.png";

function Reportes() {
  return (
    <div className='Reportes-general'>
      <div className='Reportes-margen'>

        <div className="TopInfo-general">
          <img src={LogoUp} alt="" className="TopInfo-logo"/>
          <div className="TopInfo-texto">
            <p className="TopInfo-smart">SMART</p>
            <p className="TopInfo-titulo">Diagnóstico de perfil individual</p>
          </div>
        </div>

        <div className="InfoAlumno-Caracter-general">
          <div className="InfoAlumno-general">
            <h1 className="InfoAlumno-titulo">Información del Alumno</h1>
            <div className="InfoAlumno-nombre-sexo-general">
              <div className="InfoAlumno-nombre-general">
                <p className="InfoAlumno-nombre">Nombre:&nbsp;</p>
                <p className="InfoAlumno-nombre-nombrealumno">Braulio Ivan Solorio Goméz</p>
              </div>
              <div className="InfoAlumno-sexo-general">
                <p className="InfoAlumno-sexo">Sexo:&nbsp;</p>
                <p className="InfoAlumno-sexo-sexoalumno">Masculino</p>
              </div>
            </div>
            <div className="InfoAlumno-carrera-general">
              <p className="InfoAlumno-carrera">Carrera:&nbsp;</p>
              <p className="InfoAlumno-carrera-carreraAlumno">Ingeniería en Sistemas y Graficas Computacionales</p>
            </div>
            <div className="InfoAlumno-id-fecha">
              <div className="InfoAlumno-id-general">
                <p className="InfoAlumno-id">ID:&nbsp;</p>
                <p className="InfoAlumno-id-idAlumno">0243793</p>
              </div>
              <div className="InfoAlumno-fecha-general">
                <p className="InfoAlumno-fecha">Fecha:&nbsp;</p>
                <p className="InfoAlumno-fecha-fecha">29/07/2021</p>
              </div>
            </div>
          </div>
          <div className="Caracter-general">
            <div className="Caracter-info-img">
              <div className="Caracter-info">
                <p className="Caracter-info-tipo">INALTERABLE</p>
                <p className="Caracter-info-descripcion">Se le facilita adaptarse a diversas circunstancias, disposición en las tareas que se le designen y ser sociable</p>
              </div>
              <img src={ImgCaracter} alt="" className="Caracter-img" />
            </div>
          </div>
        </div>

        <div className="ValoresAlumno-general">

          <h1 className="ValoresAlumno-titulo">Valores del Alumno</h1>
          
          <div className="ValoresAlumno-top">

            <div className="ValoresAlumno-top-conocimiento">
              <div className="Top-conocimiento-top">
                <div className="Conocimiento-titulo-general">
                  <div className="Conocimiento-titulo-imgGeneral">
                    <img src={Conocimiento} alt="" className="Conocimiento-titulo-img" />
                  </div>
                  <p className="Conocimiento-titulo">Conocimiento</p>
                </div>
                <div className="Conocimiento-quantity-general">
                  <img src={Medio} alt="" className="Conocimiento-grafic"/>
                  <p className="Conocimiento-quantity">Medio</p>
                </div>
              </div>
              <p className="Top-conocimiento-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>

            <div className="ValoresAlumno-top-material"></div>
            <div className="ValoresAlumno-top-arte"></div>
            <div className="ValoresAlumno-top-ayuda"></div>
          </div>

          <div className="ValoresAlumno-bottom">
            <div className="ValoresAlumno-bottom-status"></div>
            <div className="ValoresAlumno-bottom-calidad"></div>
            <div className="ValoresAlumno-bottom-salud"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reportes