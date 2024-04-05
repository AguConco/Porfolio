import './ServiceList.css'

const ServiceList = ({ e, i }) => {

    return (
        <li className="option-config">
            <div>
                <h4>
                    {e.name}
                </h4>
                <ul>
                    {e.descripction.map(e => <li>{e?.title || e}<ul><li>{e?.descripction}</li></ul></li>)}
                </ul>
                <span className='pagination'>{i+1}/4</span>
            </div>
        </li>
    )
}

export default ServiceList