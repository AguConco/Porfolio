import utnba from "../../assets/img/utnba.jpg"
import coder from "../../assets/img/coder.svg"
import { certificate } from "../../constants"
import React from "react"
import './Studies.css'
import coderDesarrolloWeb from '../../assets/certificate/desarrollo-web.pdf'
import coderJavaScript from '../../assets/certificate/javascript.pdf'
import coderReactJs from '../../assets/certificate/react-js.pdf'
import coderDesarrolloAplicaciones from '../../assets/certificate/desarrollo-aplicaciones.pdf'
import utnbaDesarrolloWeb from '../../assets/certificate/desarrollo-web-HTML-CSS.pdf'
import utnbaDesarrolloWebJavascript from '../../assets/certificate/desarrollo-web-javascript.pdf'
import utnbaDesarrolloWebJavascriptAvanced from '../../assets/certificate/desarrollo-web-HTML-CSS-javascript.pdf'
import utnbaDesarrolloWebBootstrap from '../../assets/certificate/desarrollo-web-bootstrap.pdf'
import utnbaProfessionalFrontEndDeveloper from '../../assets/certificate/professional-front-end-developer.pdf'

const Studies = () => {
    return (
        <section className="sectionStudies">
            <div>
                <h3 className="title-section">ESTUDIOS</h3>
                <div className="containerStudies">
                    <div className="study">
                        <div>
                            <div className="studyContainerImg">
                                <img src={utnba} alt="logo utnba" />
                            </div>
                            <h4><span>2021</span> Universidad tecnológica Nacional. Buenos Aires</h4>
                        </div>
                        <ul>
                            <li>
                                Desarrollo Web en HTML5 y CSS3
                                <a href={utnbaDesarrolloWeb} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                Desarrollo Web con JavaScript
                                <a href={utnbaDesarrolloWebJavascript} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                Desarrollo Web en HTML5, CSS3 y JavaScript (nivel avanzado)
                                <a href={utnbaDesarrolloWebJavascriptAvanced} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                Desarrollo Web en Bootstrap
                                <a href={utnbaDesarrolloWebBootstrap} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                Professional Front End Developer
                                <a href={utnbaProfessionalFrontEndDeveloper} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="study">
                        <div>
                            <div className="studyContainerImg">
                                <img src={coder} alt="logo coderhouse" />
                            </div>
                            <h4><span>2022</span> CoderHouse</h4>
                        </div>
                        <ul>
                            <a href="http://" ></a>
                            <li>
                                Desarrollo Web
                                <a href={coderDesarrolloWeb} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                JavaScript
                                <a href={coderJavaScript} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                React JS
                                <a href={coderReactJs} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                            <li>
                                Desarrollo de Aplicaciones
                                <a href={coderDesarrolloAplicaciones} title="Ver certificado" target="_blank" rel="noopener noreferrer">
                                    {certificate}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies