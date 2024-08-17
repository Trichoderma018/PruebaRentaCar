import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Cars from '../pages/Cars.jsx'
import CarsDetails from '../pages/CarsDetails.jsx'
import About from '../pages/About.jsx'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to = '/Home'/>} />
    <Route path='/Home' element={<Home />} />

    <Route path='/cars' element={<Cars />} />

    <Route path= '/CarDetail/:slug' element={<CarsDetails />} />
    <Route path= '/about' element={< About/>} />

  </Routes>
}

export default routers