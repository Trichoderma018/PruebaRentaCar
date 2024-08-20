import React, { useEffect } from 'react';
import carData from '../data/carData.js';
import { Container, Col, Row } from "reactstrap";
import Helmet from "../componets/Helmet/HElmet.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PersonIcon from '@mui/icons-material/Person';
import EvStationIcon from '@mui/icons-material/EvStation';
import LuggageIcon from '@mui/icons-material/Luggage';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import GarageIcon from '@mui/icons-material/Garage';
import CheckIcon from '@mui/icons-material/Check';

const CarsDetails = () => {

    const { slug } = useParams();

    const singleCarItem = carData.find((item) => item.marca === slug);
  

    return  <Helmet title={singleCarItem.marca}>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={singleCarItem.imgUrl} alt={singleCarItem.marca} className="w-100" />
                </Col>
                <Col lg='5'>
                    <div className="car_info">
                        <h2 className="section_title">{singleCarItem.marca}</h2>

                        <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                            <h6 className="rent_price fw-bold fs-4">${singleCarItem.price}.00 / Day </h6>
                            <span className="d-flex align-items-center gap-2">
                                <span style={{ color: "#f9a826" }}>
                                    {[...Array(5)].map((_, index) => (
                                        <StarIcon key={index} fontSize="small" />
                                    ))}
                                </span>
                            </span>
                        </div>

                        <p className="section_description">
                            {singleCarItem.descipcion}
                        </p>
                        <div className="detailsCar">
                            <h5 className="mb-0 fw-bold">Detalles del Vehículo</h5>

                            <div className="icon-grid">
                                <div className="icon-item">
                                    <DirectionsCarFilledIcon /> {singleCarItem.model}
                                </div>
                                <div className="icon-item">
                                    <SettingsIcon /> {singleCarItem.transmision}
                                </div>
                                <div className="icon-item">
                                    <EvStationIcon /> {singleCarItem.categoria}
                                </div>
                                <div className="icon-item">
                                    <AcUnitIcon /> {singleCarItem.aire_acond}
                                </div>

                                <div className="icon-item">
                                    <PersonIcon /> {singleCarItem.pasajeros}
                                </div>
                                <div className="icon-item">
                                    <LuggageIcon /> {singleCarItem.capacidad_maletas}
                                </div>
                                <div className="icon-item">
                                    <DirectionsCarFilledIcon /> {singleCarItem.cant_puertas}
                                </div>
                                <div className="icon-item">
                                    <BuildCircleIcon /> {singleCarItem.potencia_motor}
                                </div>

                                <div className="icon-item">
                                    <GarageIcon /> {singleCarItem.tipo_vehiculo}
                                </div>
                                <div className="icon-item">
                                    <ContactEmergencyIcon /> {singleCarItem.edad_minima}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg='4' className="extras">
                    <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                        <h6>Incluido</h6>
                        <h4 className="fw-bold fs-4">Tanque Lleno</h4>
                        <h6 className="mt-4"><CheckIcon color="success" fontSize="small" /> Tanque lleno gratis</h6>
                    </div>
                </Col>

                <Col lg='4' className="extras">
                    <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                        <h6>Incluido</h6>
                        <h4 className="fw-bold fs-4">Paquete de Protección Básica</h4>
                        <h6 className="mt-4"><CheckIcon color="success" fontSize="small" /> Protección contra colisiones</h6>
                    </div>
                </Col>

                <Col lg='3' className="extras">
                    <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                        <h6 className="rent_price">${singleCarItem.price}.00 / Day</h6>
                        <button className='header_btn btn mt-4' style={{ color: "#f9a826", backgroundColor: "#fff" }}>
                             <Link to={`/serviceslist`}>Seleccionar</Link>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
</Helmet>

};

export default CarsDetails;