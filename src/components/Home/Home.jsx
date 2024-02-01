import React from "react"
import './Home.css'
import imgCv from '../../assets/img/img-cv.jpg'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Home = () => {

    const moveScroll = () => {
        scrollTo(0, document.getElementById('home').clientHeight + 28)
    }

    return (
        <section id="home" className="section-home">
            <div>
                <h1 className="title">
                    <span> Programador web </span>
                    Hola! Soy Agustín Concollato
                </h1>
                <div className="container-img-home" >
                    <img src={imgCv} alt="foto Agustin Concollato" />
                </div>
                <div className="container-brief-description">
                    <p className="brief-description">
                        Me dedico a <span>desarrollar</span> y crea la <span>interfaz visual</span> y la <span>experiencia del usuario</span> en sitios web y aplicaciones
                    </p>
                    <h5 className="location">Me encuentro en <a href="https://goo.gl/maps/9PQqumgYHv6yRdpK6" target="_blank" rel="noopener noreferrer">Rafaela, Santa Fe</a></h5>
                </div>
                <div className="container-btn">
                    <a href="#contact">Contactar</a>
                    <button onClick={moveScroll}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home