import { serviceList } from '../../data/constants'
import ServiceList from '../ServiceList/ServiceList'
import './Service.css'

export const Service = () => {

    return (
        <section className='section-service'>
            <h2>Desarrollo de aplicaciones a medida</h2>
            <h3>Aplicaciones web y de escritorio</h3>
            <p className='section-service-p'>Diseñar, crear y personalizar aplicaciones especificas desde cero, para que se adapten de la mejor manera a las necesidades de cada uno</p>
            <div className='divisor-h'></div>
            <p className='section-service-p'>Ejemplos de aplicaciones que se pueden necesitar</p>
            <ul className='app-list'>
                {serviceList.map((e,i) => <ServiceList key={e.name} e={e} i={i} />)}
            </ul>
        </section>
    )
}