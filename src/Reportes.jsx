import React, {useEffect, useState} from 'react'
import "./Reportes.css";
import LogoUp from "./img/LogoUniversidad.png";
import Conocimiento from "./img/Vector.png";
import Material from "./img/Vector (1).png";
import Arte from "./img/Vector (2).png";
import Ayuda from "./img/Vector (3).png";
import Status from "./img/license.png";
import Normas from "./img/checkbox-multiple-marked-circle-outline.png";
import Salud from "./img/heart-multiple-outline.png";
import Estudio3 from "./img/estudio3.png";
import Estudio4 from "./img/estudio4.png";
import Estudio5 from "./img/estudio5.png";
import Estudio6 from "./img/estudio6.png";
import Estudio7 from "./img/estudio7.png";
import Ayuda1 from "./img/ayuda1.png";
import Ayuda2 from "./img/ayuda2.png";
import Ayuda3 from "./img/ayuda8.png";
import Ayuda4 from "./img/ayuda9.png";
import Ayuda5 from "./img/ayuda11.png";
import Velocidad from "./img/alta 1.png";
import Comprension from "./img/baja 1.png";

let caracter = {
  inalterable:"./img/inalterable 2.png",
  reflexivo_teorico:"./img/reflexivo-teorico 1.png"
}

let valores ={
  Bajo:"./img/Baja.png",
  Medio:"./img/Medio.png",
  Alto:"./img/Alta.png"
}

let metodos = {
  explorar: "./img/estudio1.png",
  leer: "./img/estudio2.png"
}

function useAlumno(){
  const [alumno, setAlumno] = useState([]);

  useEffect(() => {
    fetch("json/Alumno.json")
    .then(response => response.json())
    .then(datos => {
      setAlumno(datos);
    });
  },[]);
  
  return alumno;
}

function Reportes() {

  const alumno = useAlumno();

  return (
    <div className='Reportes-general'>
      {alumno.map(item => (
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
                <p className="InfoAlumno-nombre-nombrealumno">{item.nombre}</p>
              </div>
              <div className="InfoAlumno-sexo-general">
                <p className="InfoAlumno-sexo">Sexo:&nbsp;</p>
                <p className="InfoAlumno-sexo-sexoalumno">{item.sexo}</p>
              </div>
            </div>
            <div className="InfoAlumno-carrera-general">
              <p className="InfoAlumno-carrera">Carrera:&nbsp;</p>
              <p className="InfoAlumno-carrera-carreraAlumno">{item.carrera}</p>
            </div>
            
              
              <div  className="InfoAlumno-id-fecha">
                <div  key={item.id} className="InfoAlumno-id-general">
                  <p className="InfoAlumno-id">ID:&nbsp;</p>
                  <p className="InfoAlumno-id-idAlumno">{item.id}</p>
                </div>
                <div className="InfoAlumno-fecha-general">
                  <p className="InfoAlumno-fecha">Fecha:&nbsp;</p>
                  <p className="InfoAlumno-fecha-fecha">{item.fecha}</p>
                </div>
              </div>
              
            
          </div>
          
          <div className="Caracter-general">
            <div className="Caracter-info-img">
              <div className="Caracter-info">
                <p className="Caracter-info-tipo">{item.caracter}</p>
                <p className="Caracter-info-descripcion">{item.caracterDesc}</p>
              </div>
              <img src={require(`${caracter[item.caracterImg]}`)} alt='' className="Caracter-img" />
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
                  <img src={require(`${valores[item.conocimiento]}`)} alt="" className="Conocimiento-grafic"/>
                  <p className="Conocimiento-quantity">{item.conocimiento}</p>
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
                  <img src={require(`${valores[item.SPM]}`)} alt="" className="Material-grafic"/>
                  <p className="Material-quantity"> {item.SPM} </p>
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
                  <img src={require(`${valores[item.CyA]}`)} alt="" className="Arte-grafic"/>
                  <p className="Arte-quantity"> {item.CyA} </p>
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
                  <img src={require(`${valores[item.Ayuda]}`)} alt="" className="Ayuda-grafic"/>
                  <p className="Ayuda-quantity"> {item.Ayuda} </p>
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
                    <img src={require(`${valores[item.SyR]}`)} alt="" className="Status-grafic"/>
                    <p className="Status-quantity"> {item.SyR} </p>
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
                    <img src={require(`${valores[item.NyC]}`)} alt="" className="Calidad-grafic"/>
                    <p className="Calidad-quantity"> {item.NyC} </p>
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
                  <img src={require(`${valores[item.SyD]}`)} alt="" className="Salud-grafic"/>
                  <p className="Salud-quantity"> {item.SyD} </p>
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
                <img src={require(`${caracter[item.caracterImg2]}`)} alt="" className="Caracter2-img" />
                <div className="Caracter2-info">
                  <p className="Caracter2-info-tipo"> {item.caracter2} </p>
                  <p className="Caracter2-info-descripcion">{item.caracterDesc2}</p>
                </div>
            </div>
          </div>

          {/* Cuadro de métodos */}
          <div className="Metodos-general">

            <h1 className="Metodos-titulo">Métodos de Estudio</h1>

            <div className="Metodos-top">

              <div className="Metodos-frame-general">
                <img src={require(`${metodos[item.ME_1]}`)} alt="" className="Frame-img" />
                <p className="Frame-text" style={{width: "269px"}}>Explorar contenido general</p>
              </div>
              <div className="Metodos-frame-general">
                <img src={require(`${metodos[item.ME_2]}`)} alt="" className="Frame-img" />
                <p className="Frame-text" style={{width: "202px"}}>Leer con detenimiento</p>
              </div>
              <div className="Metodos-frame-general">
                <img src={Estudio3} alt="" className="Frame-img" />
                <p className="Frame-text" style={{width: "296px"}}>Subrayar<br/>Puntos Importantes</p>
              </div>
              <div className="Metodos-frame-general">
                <img src={Estudio4} alt="" className="Frame-img" />
                <p className="Frame-text" style={{width: "216px"}}>Detectar Ideas</p>
              </div>
            </div>

            <div className="Metodos-bottom">
              <div className="Metodos-frame-general">
                  <img src={Estudio6} alt="" className="Frame-img" />
                  <p className="Frame-text" style={{width: "163px"}}>Memorizar contenido</p>
                </div>
                <div className="Metodos-frame-general">
                  <img src={Estudio7} alt="" className="Frame-img" />
                  <p className="Frame-text" style={{width: "148px"}}>Repetir lo estudiado</p>
                </div>
                <div className="Metodos-frame-general">
                  <img src={Estudio5} alt="" className="Frame-img" />
                  <p className="Frame-text" style={{width: "182px"}}>Sintetizar la información</p>
                </div>
            </div>
          </div>
        </div>

        <div className="AreasAyuda-HabilidadesLectura-general">
          <div className="AreasAyuda-general">
            <div className="Titulo-general">
              <h1 className="AreasAyuda-titulo">Areas donde se requiere Ayuda</h1>
            </div>
            <div className="AreasAyuda-valores">
              <div className="Valores-top">

                <div className="Valores-frame">
                  <img src={Ayuda1} alt="" className="Valores-frame-img" />
                  <p className="Valores-frame-text">Manejo de tiempo</p>
                </div>

                <div className="Valores-frame">
                  <img src={Ayuda2} alt="" className="Valores-frame-img" />
                  <p className="Valores-frame-text">Manejo de tiempo</p>
                </div>

                <div className="Valores-frame">
                  <img src={Ayuda3} alt="" className="Valores-frame-img" />
                  <p className="Valores-frame-text">Manejo de tiempo</p>
                </div>

              </div>

              <div className="Valores-bottom">

                <div className="Valores-frame">
                  <img src={Ayuda4} alt="" className="Valores-frame-img" />
                  <p className="Valores-frame-text">Manejo de tiempo</p>
                </div>

                <div className="Valores-frame">
                  <img src={Ayuda5} alt="" className="Valores-frame-img" />
                  <p className="Valores-frame-text">Manejo de tiempo</p>
                </div>

              </div>
            </div>
          </div>

          <div className="HabilidadesLectura">
            <h1 className="HabilidadesLectura-titulo">Habilidades de Lectura</h1>

            <div className="HabilidadesLectura-velocidad">
              <div className="Velocidad-texto">
                <h1 className="Velocidad-titulo">Velocidad</h1>
                <p className="Velocidad-desc">La velocidad alta es favofable, siempre y cuando , se comprenda lo que el autor estaá transmientdo. Es recomendable intetar leer textos de mayor complejidad. El rango adecuado de palabras por minuto es de 200-300</p>
              </div>
              <img src={Velocidad} alt="" className="Velocidad-img" />
            </div>

            <div className="HabilidadesLectura-comprension">
              <div className="Comprension-texto">
                <h1 className="Comprension-titulo">Comprensión</h1>
                <p className="Comprension-desc">La velocidad alta es favofable, siempre y cuando , se comprenda lo que el autor estaá transmientdo. Es recomendable intetar leer textos de mayor complejidad. El rango adecuado de palabras por minuto es de 200-300</p>
              </div>
              <img src={Comprension} alt="" className="Comprension-img" />
            </div>
          </div>

        </div>

      </div>
      ))}
    </div>
  )
}

export default Reportes