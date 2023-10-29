import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DedicatedSoftware.css'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export const DedicatedSoftware = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="dedicated-software-section">
                <h1 className='dedicated-software-title'>Desarrollo de software a medida</h1>
                <h3 className='dedicated-software-subtitle'>Diseñar, crear y personalizar aplicaciones especificas desde cero, para que se adapten de la mejor manera a las necesidades de cada uno</h3>
                <span>¿Cómo lo haríamos?</span>
                <p>
                    Al realizar un software a media, conversamos sobre cuales son tus necesidades o que problema querés solucionar.
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
        </>
    )
}   