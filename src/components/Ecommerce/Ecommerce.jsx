import { useEffect, useState } from 'react'
import './Ecommerce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Ecommerce = () => {

    const [plan, setPlan] = useState(null)
    const [message, setMessage] = useState('')

    const selectedPlan = (e) => {
        e ? setPlan('completed') :setPlan('base')
        setMessage('')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='section-service-ecommerce'>
            <h1 className='ecommerce-title'>Tienda online</h1>
            <div className='container-plans'>
                <div
                    onClick={() => selectedPlan(false)}
                    className={plan !== 'base' ? 'purchase-plan' : 'purchase-plan plan-selected'} >
                    <h5>Tienda base <span>$150000</span></h5>
                    <span>Contiene</span>
                    <ul>
                        <li>Carrito de compras</li>
                        <li>Carrito de compras</li>
                        <li>Pagos online</li>
                        <li>Panel para administrar los productos</li>
                    </ul>
                </div>
                <div
                    onClick={() => selectedPlan(true)}
                    className={plan !== 'completed' ? 'purchase-plan' : 'purchase-plan plan-selected'} >
                    <h5>Tienda completa <span>$150000</span></h5>
                    <span>Contiene</span>
                    <ul>
                        <li>Carrito de compras</li>
                        <li>Carrito de compras</li>
                        <li>Pagos online</li>
                        <li>Panel para administrar los productos</li>
                    </ul>
                </div>
            </div>
            <span>{message}</span>
            <div className='container-contact-plan'>
                <Link to={plan === null ? "/service/e-commerce" : "/service/e-commerce/contact"} onClick={()=> plan === null && setMessage('Selecciona un tipo de tienda')} className='contact-plan'>
                    <span> Continuar </span>
                    <div>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default Ecommerce