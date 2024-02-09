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
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                            Ver
                        </a>
                    </div>
                    <p className='description-app'>
                        Pueden ver los horarios y lugar de lo que se va a hacer en la noche.
                    </p>
                    <p className='description-app'>
                        Confirmar la asistencia y ver diferentes opciones de menú y formas de pago.
                    </p>
                    <p className='description-app'>
                        Además hay una playlist donde pueden agregar sus canciones favoritas junto con un lugar donde compartir las fotos que se sacaron en la noche
                    </p>

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
                    <p className='description-app'>
                        Registra pacientes y accede a su historial manteniendo un seguimiento de cada una de las consultas y que le fue recetado.
                    </p>
                    <p className='description-app'>
                        Ademas cuenta con una sección donde están todas las flores, que se usan como medicamento, que función cumplen y sus equivalentes
                    </p>
                    <p className='collaborator'>
                        Hecho con: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guido-brugiatelli-b72549235/">Guido Brugiatelli</a>
                    </p>
                </div>
            </div>
        </section>
    )
}