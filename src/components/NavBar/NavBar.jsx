import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const NavBar = ({ status }) => {

    const [menu, setMenu] = useState(true)

    window.onresize = () => {
        window.innerWidth > 699 && setMenu(true)
    }

    useEffect(() => {
        window.innerWidth < 699 && setMenu(false)
    }, [])

    return (
        <header>
            <div>
                <Link to='/' className="logo">
                    CONCO
                </Link>
                <nav className="nav-sections">
                    <ul>
                        {status
                            ? <nav className='nav-section-home'>
                                {menu &&
                                    <ul>
                                        <li>
                                            <a href="/#home"> Inicio </a>
                                        </li>

                                        <li>
                                            <a href="/#about"> <pre>Sobre mí</pre> </a>
                                        </li>
                                        <li>
                                            <a href="/#projects"> Proyectos </a>
                                        </li>
                                    </ul>}
                            </nav>
                            : <li>
                                <Link to={"/"} >Inicio</Link>
                            </li>
                        }
                        <li>
                            <a className="btn-contact" href="#contact"> Contacto </a>
                        </li>
                        <li>
                            <Link to="/service" className='btn-service'>Servicios</Link>
                        </li>
                        {status
                            && <li className='icon-menu' onClick={() => setMenu(!menu)}>
                                <FontAwesomeIcon icon={menu ? faBarsStaggered : faBars} />
                            </li>}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar