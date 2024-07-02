import './Jobs.css'
import imgTerapiaFloral from '../../assets/img/terapia-floral.png'
import invitacionByM from '../../assets/img/invitacion-bym.png'
import iconoTerapiaFloral from '../../assets/img/icono.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Jobs = () => {
    return (
        <section className='section-jobs'>
            <h2>últimos trabajos</h2>
            <div className='container-jobs'>
                <div className="job">
                    <h4>
                        {/* <img src="" alt="icono - Software - programa de pacientes de terapista floral" /> */}
                        <div>
                            Invitación de casamiento - Belu y Maxi
                            <span>Páginas web</span>
                        </div>
                    </h4>
                    <div>
                        <img src={invitacionByM} alt="invitación web de casamiento" />
                        <a target="_blank" rel="noopener noreferrer">
                            {/* <FontAwesomeIcon icon={faUpRightFromSquare} /> */}
                            Proximamente
                        </a>
                    </div>
                </div>
                <div className="job">
                    <h4>
                        <img src={iconoTerapiaFloral} alt="icono - Software - programa de pacientes de terapista floral" />
                        <div>
                            Terapia floral
                            <span>Aplicación de escritorio</span>
                        </div>
                    </h4>
                    <div>
                        <img src={imgTerapiaFloral} alt="Software - programa de pacientes de terapista floral" />
                    </div>
                    <p className='collaborator'>
                        Hecho con: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guido-brugiatelli-b72549235/">Guido Brugiatelli</a>
                    </p>
                </div>
            </div>
        </section>
    )
}