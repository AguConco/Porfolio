import { Link } from "react-router-dom"

export const ServiceList = () => {
    return (
        <section id='service'>
            <h3 className="title-section">SERVICIOS</h3>
            <div className='container-card-service'>
                <div className="card-service">
                    <h5 className="title-service">Desarrollo de software a medida <span>Aplicaciones web y de escritorio</span></h5>
                    <div className="container-description">
                        <p className='description-service'>Diseñar, crear y personalizar aplicaciones especificas desde cero, para que se adapten de la mejor manera a las necesidades de cada uno</p>
                    </div>
                    <Link to="/service/dedicated-software" className='action-card-service'>Obtener presupuesto gratis</Link>
                </div>
                <div className="card-service">
                    <h5 className="title-service">Página web para tu negocio <span>Tienda online</span> </h5>
                    <div className='container-description'>
                        <p className='description-service'>Tus clientes podrán ver los productos en la web, armar su carrito y comprar lo que más le gusta</p>
                    </div>
                    <Link to="/service/e-commerce" className='action-card-service'>Explorar el contenido de tu tienda </Link>
                </div>
            </div>
        </section>
    )
}