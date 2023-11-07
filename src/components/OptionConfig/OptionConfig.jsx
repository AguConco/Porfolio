import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import './OptionConfig.css'

const OptionConfig = ({ e }) => {

    const [expand, setExpand] = useState(false)

    return (
        <li className="option-config" style={expand ? {height: 'auto'} : {height: '60px'}}>
            <div>
                <span> {e.name} {!e.obligatory && <button>Agregar</button>}</span>
                {e.descripction.map((e)=> <p>{e}</p>)}
            </div>
            <button className="btn-expand" onClick={() => setExpand(!expand)}><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></button>
        </li>
    )
}

export default OptionConfig