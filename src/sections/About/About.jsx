import React from "react"
import './About.css'
import computer from '../../assets/img/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    return (
        <section id="about" className="sectionAbout">
            <div>
                <div className="containerImg">
                    <img src={computer} alt="computadora programación"/>
                    <div><FontAwesomeIcon icon={faCode} /></div>
                </div>
                <div className="info">
                    <span>ACERCA DE MÍ</span>
                    <h2>Un apacionado en diseñar, maquetar y programar sitios web </h2>
                    <p>
                        Como desarrollador front-end junior, cuento con conocimientos en HTML, CSS, JavaScript y React JS.
                        Me destaco en el diseño de sitios web con interfaces dinámicas, atractivas, minimalistas y receptivas
                        mediante la escritura de código limpio y optimizado para ofrecer una experiencia de usuario fluida.
                        <br />
                        Además tengo conocimientos en React Native para el desarrollo de aplicaciones móviles multiplataforma.
                    </p>
                    <h5>Me encuentro en Rafaela, Santa Fe, Argentina 📍</h5>
                    <a href="#" target="_blank" rel="noopener noreferrer">Ver CV</a>
                </div>
            </div>
        </section>
    )
}

export default About