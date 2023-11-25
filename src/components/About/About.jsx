import React from "react"
import './About.css'
import computer from '../../assets/img/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
// import cv from '../../assets/cv/cv-agustin-concollato.pdf'

const About = () => {
    return (
        <section id="about" className="section-about">
            <div>
                <div className="containerImg">
                    <img src={computer} alt="computadora programación" />
                    <div><FontAwesomeIcon icon={faCode} /></div>
                </div>
                <div className="info">
                    <h3 className="title-section">SOBRE MÍ</h3>
                    <h2>Me gusta diseñar y programar aplicaciones web </h2>
                    <p>
                        Como desarrollador web, cuento con conocimientos en HTML, CSS, JavaScript y React JS del lado del cliente. Y del lado del servidor PHP y node js.
                    </p>
                    <p>
                        Me destaco en el diseño de sitios web con interfaces dinámicas, atractivas, minimalistas y receptivas
                        mediante la escritura de código limpio y optimizado para ofrecer una experiencia de usuario fluida.
                    </p>
                    {/* <p>
                        Además tengo conocimientos en React Native para el desarrollo de aplicaciones móviles.
                    </p> */}
                    {/* <a href={cv} target="_blank" rel="noopener noreferrer">Ver CV</a> */}
                </div>
            </div>
        </section>
    )
}

export default About