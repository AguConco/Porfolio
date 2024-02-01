import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import './OptionConfig.css'

const OptionConfig = ({ e }) => {

    const [expand, setExpand] = useState(false)

    return (
        <li className="option-config" style={expand ? { height: 'auto' } : { height: '65px' }} onClick={() => setExpand(!expand)}>
            <div>
                <span>
                    {e.name}
                </span>
                <ul>
                    {e.descripction.map(e => <li>{e}</li>)}
                </ul>
            </div>
            <button className="btn-expand"><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></button>
        </li>
    )
}

export default OptionConfig