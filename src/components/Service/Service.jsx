import { configEcommerce } from '../../data/constants'
import ServiceList from '../ServiceList/ServiceList'
import './Service.css'

export const Service = () => {

    return (
        <section className='section-service'>
            <h2>Desarrollo de aplicaciones a medida</h2>
            <h3>Aplicaciones web y de escritorio</h3>
            <p className='section-service-p'>Diseñar, crear y personalizar aplicaciones especificas desde cero, para que se adapten de la mejor manera a las necesidades de cada uno</p>
            <div>
                <span>¿Cómo lo haríamos?</span>
                <p className='section-service-p'>Al realizar una aplicación a medida, conversamos sobre que necesidades o problemas quieres solucionar. Luego de hacer un análisis de lo charlado, te presento cómo podríamos llevar a cabo el proyecto y cual sería la mejor manera</p>
                <p className='section-service-p'>Una vez que hemos definido los detalles del proyecto y llegado a un acuerdo con un plan establecido, comenzamos a crear tu aplicación</p>
            </div>
            <div className='divisor-h'></div>
            <p className='section-service-p'>Ejemplos de aplicaciones que se pueden necesitar con una breve descripción de las funcionalidades</p>
            <ul className='app-list'>
                {configEcommerce.map(e => <ServiceList key={e.name} e={e} />)}
            </ul>
        </section>
    )
}