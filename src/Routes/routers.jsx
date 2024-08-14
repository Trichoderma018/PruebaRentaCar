import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Cars from '../pages/Cars.jsx'
import CarsDetails from '../pages/CarsDetails.jsx'


const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to = '/Home'/>} />
    <Route path='/Home' element={<Home />} />

    <Route path='/cars' element={<Cars />} />

    <Route path= '/CarDetail/:slug' element={<CarsDetails />} />
  </Routes>
}

export default routers