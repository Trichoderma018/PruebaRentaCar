import React from 'react';
import { Col } from "reactstrap";

import vacation01 from '../../../public/all-images/image-general/vacation01.jpg'
import vacation02 from '../../../public/all-images/image-general/vacation02.jpg'
import vacation03 from '../../../public/all-images/image-general/vacation03.jpg'
import vacation04 from '../../../public/all-images/image-general/vacation04.jpg'
import '../../styles/destinos-vacation.css'

const Places_Vacations = [
    {
        name: 'Hotel Bahia Ballena',
        imgUrl: vacation01,
        descripcion: 'Ubicado en la costa sur de Costa Rica, el Hotel Bahia Ballena ofrece vistas impresionantes al océano y acceso directo a playas de arena blanca. Ideal para unas vacaciones relajantes en un entorno natural.',
    },
    {
        name: 'Hotel Riu',
        imgUrl: vacation02,
        descripcion: 'El Hotel Riu es un resort todo incluido en la hermosa playa de Guanacaste. Disfruta de una amplia gama de actividades, piscinas, restaurantes y entretenimiento para toda la familia en un ambiente lujoso.',

    },
    {
        name: 'Hotel Volcan Irazu',
        imgUrl: vacation03,
        descripcion: 'Situado cerca del majestuoso Volcán Irazú, este hotel ofrece una experiencia única con impresionantes vistas del volcán y la naturaleza circundante. Perfecto para explorar el parque nacional y disfrutar de la tranquilidad.',

    },
    {
        name: 'Puntarenas',
        imgUrl: vacation04,
        descripcion: 'Puntarenas es una ciudad costera vibrante con hermosas playas y una rica vida cultural. Disfruta de actividades acuáticas, deliciosa gastronomía local y un ambiente relajado en esta popular localidad.'

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