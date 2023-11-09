import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import './OptionConfig.css'

const OptionConfig = ({ e, setSelectedOption, selectedOptions }) => {

    const [expand, setExpand] = useState(false)
    const [] = useState()

    const addFunctionEcommerce = () => {
        if (!selectedOptions.some(option => option.name === e.name)) {
            setSelectedOption(current => [...current, e])
        }
    }

    const removeFunctionEcommerce = () => {
        setSelectedOption(current => current.filter(option => option.name !== e.name));
    };    
    
    useEffect(() => {
        // console.log(selectedOptions)
    }, [selectedOptions])

    return (
        <li className="option-config" style={expand ? { height: 'auto' } : { height: '60px' }}>
            <div>
                <span>
                    {e.name}
                    {!e.obligatory && !selectedOptions.some(option => option.name === e.name)
                        ? (<button className="btn-add" onClick={addFunctionEcommerce}>Agregar</button>) 
                        : !e.obligatory && (<button className="btn-remove" onClick={removeFunctionEcommerce}>Eliminar</button>)                    }
                </span>
                {e.descripction.map(e => <p>{e}</p>)}
            </div>
            <button className="btn-expand" onClick={() => setExpand(!expand)}><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></button>
        </li>
    )
}

export default OptionConfig