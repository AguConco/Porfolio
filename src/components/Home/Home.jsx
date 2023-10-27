import React from "react"
import './Home.css'
import imgCv from '../../assets/img/img-cv.jpg'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section id="home" className="sectionHome">
            <div>
                <div>
                    <h1 className="title">
                        <span> Desarrollador Web </span>
                        Hola! Soy Agustín Concollato
                    </h1>
                    <div className="container-brief-description">
                        <p className="brief-description">
                            Me dedico a desarrollar y crea la interfaz visual y la experiencia del usuario en sitios web y aplicaciones
                        </p>
                        <h5 className="location">Me encuentro en <a href="https://goo.gl/maps/9PQqumgYHv6yRdpK6" target="_blank" rel="noopener noreferrer">Rafaela, Santa Fe, Argentina</a></h5>
                    </div>
                    <a href="#projects" className="btn-projects">Ver proyectos</a>
                    <Link to="/service" className="btn-service">Ver servicios</Link>
                </div>
                <div className="container-img-home" >
                    <img src={imgCv} alt="foto Agustin Concollato" />
                </div>
            </div>
        </section>
    )
}

export default Home