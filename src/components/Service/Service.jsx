import { Link } from 'react-router-dom'
import './Service.css'

export const Service = () => {
    return (
        <section id='service'>
            <h3 className="title-section">SERVICIOS</h3>
            <div className='container-card-service'>
                <div className="card-service">
                    <h5 className="title-service">Desarrollo de software a medida</h5>
                    <div className="container-description">
                        <p className='description-service'>Si estás buscando una solución única y adaptada, estoy aquí para guiar el camino desde la idea hasta la implementación.</p>
                        <div></div>
                    </div>
                    <Link to="/dedicated-software" className='action-card-service'>Pedir presupuesto</Link>
                </div>
                <div className="card-service">
                    <h5 className="title-service">Programas varios para las diferentes necesidades</h5>
                    <div className='container-description'>
                        <p className='description-service'>Varias aplicaciones que he desarrollado para abordar diversas necesidades.</p>
                        <p className='description-service'>Estas aplicaciones están diseñadas para ser prácticas y útiles en diferentes situaciones.</p>
                        <p className='description-service'>Mi enfoque es brindar soluciones listas para usar que aporten valor y eficiencia a las actividades diarias y los objetivos comerciales.</p>
                        <div></div>
                    </div>
                    <Link to="/programs" className='action-card-service'>Ver todos los programas</Link>
                    <div className="soon"><span>Próximamente</span></div>
                </div>
            </div>
        </section>
    )
}


//////////////// Manera de explicar el servicio de aplicaciones ya creadas que no son a medida de cada cliente ////////////////////

// Ofrezco acceso a una variedad de aplicaciones que he desarrollado para abordar diversas necesidades.
// Estas aplicaciones están diseñadas para ser prácticas y útiles en diferentes situaciones, lo que permite a los usuarios utilizarlas según sus necesidades.
// Mi enfoque es brindar soluciones listas para usar que aporten valor y eficiencia a las actividades diarias y los objetivos comerciales.