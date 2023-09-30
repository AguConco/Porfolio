import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DedicatedSoftware.css'
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Contact from '../Contact/Contact'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const DedicatedSoftware = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="dedicated-software-section">
                <Link to={'/'} className='back'><FontAwesomeIcon icon={faArrowLeft} /> Volver atras</Link>
                <h1 className='dedicated-software-title'>Desarrollo de software a medida</h1>
                <span className='dedicated-software-subtitle'>Si estás buscando una solución única y adaptada, estoy aquí para guiar el camino desde la idea hasta la implementación</span>
                <h3>¿Cómo lo haríamos?</h3>
                <p>
                    Al realizar un software a media, iniciamos conversando sobre cuales son tus necesidades o que problema querés solucionar.
                    Luego de hacer un análisis, te presento cómo lo podríamos hacer y cual sería la mejor manera.
                </p>
                <p>
                    Una vez que hemos definido los detalles del proyecto, llegado a un acuerdo con un plan establecido y las metas claras, comenzamos a crear tu software.
                </p>
                <a href='#contact' className='start-project'>
                    <div>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    <span> Empezar proyecto </span>
                </a>
            </section>
            <Contact />
        </>
    )
}   