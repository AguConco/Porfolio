import React from "react"
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="sectionContact">
            <div>
                <h3>CONTACTO</h3>
                <span>Cualquier consulta sobre el sitio web que deseas realizar, no dudes en contactarme.</span>
                <div className="containerContactCard">
                    <div className="contactCard">
                        <span>Correo electrónico</span>
                        <a href="mailto:agustinconcollato@gmail.com">agustinconcollato@gmail.com</a>
                    </div>
                    <div className="contactCard">
                        <span>Celular / WhatsApp</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/send?text=Hola!&amp;phone=+543492417924">+54 3492 417924</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact