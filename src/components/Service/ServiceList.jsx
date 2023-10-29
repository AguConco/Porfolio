import { Link } from "react-router-dom"
import { services } from "../../data/constants"

export const ServiceList = () => {
    return (
        <section id='service'>
            <h3 className="title-section">SERVICIOS</h3>
            <div className='container-card-service'>
                {services.map(e => (
                    <div className="card-service">
                        <h5 className="title-service">{e.title} <span>{e.subtitle}</span></h5>
                        <div className="container-description">
                            {e.descripction.map(e => <p className='description-service'>{e}</p>)}
                        </div>
                        <Link to={e.btn.route} className='action-card-service'>{e.btn.text}</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}