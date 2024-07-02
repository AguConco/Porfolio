import { Link, useParams } from 'react-router-dom'
import './NavBar.css'
import { useEffect } from 'react'

export const NavBar = () => {

    const path = useParams()
    const selected = path['*']

    useEffect(() => {
        selected && scrollTo(0, document.getElementById('home').clientHeight + 28)
    }, [selected])

    return (
        <nav>
            <ul className={selected || 'servicios'} >
                <li><Link to={'/servicios'}> Servicios </Link></li>
                <li><Link to={'/trabajos'}> Trabajos </Link></li>
                <li><Link to={'/proyectos'}> Proyectos </Link></li>
                <div></div>
            </ul>
        </nav >
    )
}