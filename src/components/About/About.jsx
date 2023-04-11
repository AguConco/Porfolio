import React from "react"
import './About.css'
import computer from '../../assets/img/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import cv from '../../assets/cv/cv-agustin-concollato.pdf'

const About = () => {
    return (
        <section id="about" className="sectionAbout">
            <div>
                <div className="containerImg">
                    <img src={computer} alt="computadora programación"/>
                    <div><FontAwesomeIcon icon={faCode} /></div>
                </div>
                <div className="info">
                    <h3>SOBRE MÍ</h3>
                    <h2>Un apacionado en diseñar y programar sitios web </h2>
                    <p>
                        Como desarrollador front-end, cuento con conocimientos en HTML, CSS, JavaScript y React JS.
                        Me destaco en el diseño de sitios web con interfaces dinámicas, atractivas, minimalistas y receptivas
                        mediante la escritura de código limpio y optimizado para ofrecer una experiencia de usuario fluida.
                        <br />
                        Además tengo conocimientos en React Native para el desarrollo de aplicaciones móviles multiplataforma.
                    </p>
                    <a href={cv} target="_blank" rel="noopener noreferrer">Ver CV</a>
                </div>
            </div>
        </section>
    )
}

export default About