import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/services-list.css'
import servicesData from '../data/servicesData.js'


const ServicesLIst = () => {
  return (
    <div>ServicesLIst</div>
  )
}

const ServiceItem =({item}) =>(
    <Col lg='4' md='4' sm='6'>
        <div className='service_item mb-3'>
            <span className='mb-3'>
                
            </span>
        </div>
    </Col>
)
export default ServicesLIst