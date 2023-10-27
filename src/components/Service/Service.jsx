import { Link, Route, Routes } from 'react-router-dom'
import './Service.css'
import { DedicatedSoftware } from '../DedicatedSoftware/DedicatedSoftware'
import { ServiceList } from './ServiceList'
import NavBar from '../NavBar/NavBar'
import Contact from '../Contact/Contact'
import { useEffect } from 'react'

export const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar status={false} />
            <Routes>
                <Route path='/dedicated-software' element={<DedicatedSoftware />} />
                <Route path='/' element={<ServiceList />} />
            </Routes>
            <Contact />
        </>
    )
}