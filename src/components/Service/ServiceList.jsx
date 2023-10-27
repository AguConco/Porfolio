import { Link } from "react-router-dom"

export const ServiceList = () => {
    return (
        <section id='service'>
            <h3 className="title-section">SERVICIOS</h3>
            <div className='container-card-service'>
                <div className="card-service">
                    <h5 className="title-service">Desarrollo de software a medida</h5>
                    <div className="container-description">
                        <p className='description-service'>Diseñar, crear y personalizar aplicaciones especificas desde cero, para que se adapten de la mejor manera a las necesidades de cada uno</p>
                        <div></div>
                    </div>
                    <Link to="/service/dedicated-software" className='action-card-service'>Pedir presupuesto</Link>
                </div>
                <div className="card-service">
                    <h5 className="title-service">Ecommerce página web para tu negocio</h5>
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