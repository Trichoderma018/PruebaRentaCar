import React from 'react';
import {  Col} from "reactstrap";

import vacation01 from '../../../public/all-images/image-general/vacation01.jpg'
import vacation02 from '../../../public/all-images/image-general/vacation02.jpg'
import vacation03 from '../../../public/all-images/image-general/vacation03.jpg'
import vacation04 from '../../../public/all-images/image-general/vacation04.jpg'
import '../../styles/destinos-vacation.css'

const Places_Vacations = [
    {
        name: 'Hotel Bahia Ballena',
        imgUrl: vacation01,
        descripcion: 'Lorem ipsum dolor sit amet.',
    },
    {
        name: 'Hotel Riu',
        imgUrl: vacation02,
        descripcion: 'Lorem ipsum dolor sit amet.',

    },
    {
        name: 'Hotel Volcan Irazu',
        imgUrl: vacation03,
        descripcion: 'Lorem ipsum dolor sit amet.',

    },
    {
        name: 'Puntarenas',
        imgUrl: vacation04,
        descripcion: 'Lorem ipsum dolor sit amet.',

    },
];

const DestinosVacations = () => {
    return (
        <>
        {Places_Vacations.map((item, index) => (
            <Col lg='3' md='3' sm='3' xs='6' key={index} className='mb-4'>
                <div className="single_vacation">
                    <div className="single_vacation-img">
                        <img src={item.imgUrl} alt="" className='w-100 ' />
                    </div>
                    <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                    <p className="section_description text-center">
                        {item.descripcion}
                    </p>
                </div>
            </Col>
        ))}
    </>
    );
};

export default DestinosVacations