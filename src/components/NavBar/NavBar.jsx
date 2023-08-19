import React from "react"
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <header>
            <div>
                <div className="logo">
                    <FontAwesomeIcon icon={faCode} />
                </div>
                <nav className="nav-sections">
                    <ul>
                        <li>
                            <a href="/#home"> Inicio </a>
                        </li>
                        <li>
                            <a href="/#service">Servicios</a>
                        </li>
                        <li>
                            <a href="/#about"> Sobre mí </a>
                        </li>
                        <li>
                            <a href="/#projects"> Proyectos </a>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-section-contact">
                    <a className="btn-contact" href="#contact"> Contacto </a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar