import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = ({ status }) => {
    return (
        <header>
            <div>
                <Link to='/' className="logo">
                    CONCO
                </Link>
                <nav className="nav-sections">
                    <ul>
                        {status ?
                            <>
                                <li>
                                    <a href="/#home"> Inicio </a>
                                </li>

                                <li>
                                    <a href="/#about"> Sobre mí </a>
                                </li>
                                <li>
                                    <a href="/#projects"> Proyectos </a>
                                </li>
                            </> :
                            <li>
                                <Link to={"/"} >Inicio</Link>

                            </li>
                        }
                        <li>
                            <a className="btn-contact" href="#contact"> Contacto </a>
                        </li>
                        <li>
                            <Link to="/service" className='btn-service'>Servicios</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar