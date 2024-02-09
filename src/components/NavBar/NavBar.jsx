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
            <ul className={selected || 'service'} >
                <li><Link to={'/service'}> Servicios </Link></li>
                <li><Link to={'/jobs'}> Trabajos </Link></li>
                <li><Link to={'/projects'}> Proyectos </Link></li>
                <div></div>
            </ul>
        </nav >
    )
}