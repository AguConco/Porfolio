import { useEffect, useState } from 'react'
import './Footer.css'
import Studies from '../Studies/Studies'
import CV from '../../assets/cv/cv-agustin-concollato.pdf'


export const Footer = () => {

    const [data, setData] = useState(null)

    const Modal = ({ data }) => {

        const body = document.querySelector('body')

        console.log(body.style.overflow = 'hidden')

        useEffect(() => {
            return () => body.style.overflow = 'auto'
        }, [])

        return (
            <div className='modal'>
                <div>
                    {data == 'studies'
                        ? <Studies />
                        : <iframe src={CV} type="application/pdf"></iframe>
                    }
                    <button className='close-modal' onClick={() => setData(null)}>Cerrar</button>
                </div>
                <div className="modal-background" onClick={() => setData(null)}></div>
            </div>
        )
    }

    return (
        <>
            {data !== null && <Modal data={data} />}
            <footer>
                <div>
                    <h4>Agustin Concollato</h4>
                    <ul>
                        <li><button onClick={() => setData('studies')}>Mis estudios</button></li>
                        <li><button onClick={() => setData('cv')}>ver cv</button></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}