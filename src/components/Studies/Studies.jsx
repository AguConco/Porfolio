import utnba from "../../assets/img/utnba.jpg"
import coder from "../../assets/img/coder.svg"
import { certificate } from "../../constants"
import React from "react"
import './Studies.css'

const Studies = () => {
    return (
        <section className="sectionStudies">
            <div>
                <h3>ESTUDIOS</h3>
                <div className="containerStudies">
                    <div className="study">
                        <div>
                            <div className="studyContainerImg">
                                <img src={utnba} alt="logo utnba" />
                            </div>
                            <h4><span>2021</span> Universidad tecnológica Nacional. Buenos Aires</h4>
                        </div>
                        <ul>
                            <li>Desarrollo Web en HTML5 y CSS3 <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>Desarrollo Web con JavaScript <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>Desarrollo Web en HTML5, CSS3 y JavaScript (nivel avanzado) <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>Desarrollo Web en Bootstrap <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>Professional Front End Developer <a href="#" title="Ver certificado">{certificate}</a></li>
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
                            <li>Desarrollo Web <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>JavaScript <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>React JS <a href="#" title="Ver certificado">{certificate}</a></li>
                            <li>Desarrollo de Aplicaciones <a href="#" title="Ver certificado">{certificate}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies