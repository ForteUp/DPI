import React from 'react'
import "./Reportes.css";
import LogoUp from "./img/LogoUniversidad.png";
import ImgCaracter from "./img/inalterable 2.png";
import Medio from "./img/Medio.png";
import Conocimiento from "./img/Vector.png";
import Material from "./img/Vector (1).png";
import Arte from "./img/Vector (2).png";
import Ayuda from "./img/Vector (3).png";
import Status from "./img/license.png";
import Bajo from "./img/Baja.png";
import Normas from "./img/checkbox-multiple-marked-circle-outline.png";
import Salud from "./img/heart-multiple-outline.png";
import Alta from "./img/Alta.png";
import ImgCaracter2 from "./img/reflexivo-teorico 1.png";

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

            {/* Cuadro de valores del conocimiento */}
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

            {/* Cuadro de valores del material */}
            <div className="ValoresAlumno-top-material">
              <div className="Top-material-top">
                <div className="Material-titulo-general">
                  <div className="Material-titulo-imgGeneral">
                    <img src={Material} alt="" className="Material-titulo-img" />
                  </div>
                  <p className="Material-titulo">Sentido Practico Material</p>
                </div>
                <div className="Material-quantity-general">
                  <img src={Medio} alt="" className="Material-grafic"/>
                  <p className="Material-quantity">Medio</p>
                </div>
              </div>
              <p className="Top-material-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>

            {/* Cuadro de valores del arte */}
            <div className="ValoresAlumno-top-arte">
              <div className="Top-arte-top">
                <div className="Arte-titulo-general">
                  <div className="Arte-titulo-imgGeneral">
                    <img src={Arte} alt="" className="Arte-titulo-img" />
                  </div>
                  <p className="Arte-titulo">La Cultura y El Arte</p>
                </div>
                <div className="Arte-quantity-general">
                  <img src={Medio} alt="" className="Arte-grafic"/>
                  <p className="Arte-quantity">Medio</p>
                </div>
              </div>
              <p className="Top-arte-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>

            {/* Cuadro de valores del ayuda */}
            <div className="ValoresAlumno-top-ayuda">
              <div className="Top-ayuda-top">
                <div className="Ayuda-titulo-general">
                  <div className="Ayuda-titulo-imgGeneral">
                    <img src={Ayuda} alt="" className="Ayuda-titulo-img" />
                  </div>
                  <p className="Ayuda-titulo">Ayuda a Otros</p>
                </div>
                <div className="Ayuda-quantity-general">
                  <img src={Medio} alt="" className="Ayuda-grafic"/>
                  <p className="Ayuda-quantity">Medio</p>
                </div>
              </div>
              <p className="Top-ayuda-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>
          </div>

          <div className="ValoresAlumno-bottom">
            <div className="ValoresAlumno-bottom-status">
              <div className="Bottom-status-top">
                  <div className="Status-titulo-general">
                    <img src={Status} alt="" className="Status-titulo-img" />
                    <p className="Status-titulo">Status y Reconocimiento</p>
                  </div>
                  <div className="Status-quantity-general">
                    <img src={Bajo} alt="" className="Status-grafic"/>
                    <p className="Status-quantity">Bajo</p>
                  </div>
              </div>
              <p className="Top-Status-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>


            <div className="ValoresAlumno-bottom-calidad">
              <div className="Top-calidad-top">
                  <div className="Calidad-titulo-general">
                    <img src={Normas} alt="" className="Calidad-titulo-img" />
                    <p className="Calidad-titulo">Normas y Calidad</p>
                  </div>
                  <div className="Calidad-quantity-general">
                    <img src={Alta} alt="" className="Calidad-grafic"/>
                    <p className="Calidad-quantity">Alto</p>
                  </div>
              </div>
              <p className="Top-calidad-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>


            <div className="ValoresAlumno-bottom-salud">
              <div className="Top-salud-top">
                <div className="Salud-titulo-general">
                  <img src={Salud} alt="" className="Salud-titulo-img" />
                  <p className="Salud-titulo">Salud y Deporte</p>
                </div>
                <div className="Salud-quantity-general">
                  <img src={Medio} alt="" className="Salud-grafic"/>
                  <p className="Salud-quantity">Medio</p>
                </div>
              </div>
              <p className="Top-salud-info">Preferencia por todo lo referente al conocimiento, la verdad de las cosas y la ciencia</p>
            </div>
          </div>
        </div>

        {/* Cáracter y métodos de estudio */}
        <div className="Caracter-Metodos-general">

          {/* Cuadro de cáracter */}
          <div className="Caracter2-general">
            <div className="Caracter2-info-img">
                <img src={ImgCaracter2} alt="" className="Caracter2-img" />
                <div className="Caracter2-info">
                  <p className="Caracter2-info-tipo">REFLEXIVO - TEÓRICO</p>
                  <p className="Caracter2-info-descripcion">Tiende a la objetividad, a considerarlas experiencias y observarlas desde diferentes ángulos. Reúne datos y los analiza metódicamente antes de llegar</p>
                </div>
            </div>
          </div>

          {/* Cuadro de métodos */}
          <div className="Metodos-general">

            <h1 className="Metodos-titulo">Métodos de Estudio</h1>

            <div className="Metodos-top">

              <div className="Top-primero-general">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reportes