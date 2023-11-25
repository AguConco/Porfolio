import { useEffect } from 'react'
import './Ecommerce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { configEcommerce } from '../../data/constants'
import OptionConfig from '../OptionConfig/OptionConfig'

const Ecommerce = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='section-service-ecommerce'>
            <h1 className='ecommerce-title'>Tienda online</h1>
            <p className='description-config'>Acá podrás ver las secciones y funcionalidades que puede contener tu tienda. </p>
            <section>
                <h4 className='title-section'>Secciones y funcionalidades</h4>
                <ul className="content-ecommerce-list">
                    {configEcommerce.map(e => <OptionConfig key={e.name} e={e} />)}
                </ul>
            </section>

            <section>
                <h4 className='title-section'>Hosting y Dominio</h4>
                <p className='subtitle-section'>¿Qué es el hosting y dominio? ¿porque necesitarias uno?</p>
                <div className="data-hosting-domain">
                    <p>El hosting es un lugar en internet donde uno coloca todos los archivos necesarios para que la página web funciones correctamente</p>
                    <p>El dominio es por donde uno accede a ese lugar donde esta la página web, por ejemplo <pre>"www.nombre-del-dominio.com"</pre></p>
                    <p>Esto tiene un costo de mantenimiento y se renueva cada cierto tiempo dependiendo del plan. Estos pueden ser cada 1, 12 o 24 meses  </p>
                </div>
            </section>
            <a href='#contact' className='start-project'>
                <div>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <span> Empezar tienda online </span>
            </a>
        </section>
    )
}
export default Ecommerce