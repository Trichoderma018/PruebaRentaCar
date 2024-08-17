import React, { useEffect } from 'react';
import carData from '../data/carData.js';
import { Container, Col, Row } from "reactstrap";
import Helmet from "../componets/Helmet/HElmet.jsx";
import { useParams } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckIcon from '@mui/icons-material/Check';

const CarsDetails = () => {

    const { slug } = useParams();

    const singleCarItem = carData.find((item) => item.carName === slug);
  

    return <Helmet title={singleCarItem.carName}>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={singleCarItem.imgUrl} alt=" " className="w-100" />
                    </Col>
                    <Col lg='5'>
                        <div className="car_info">
                            <h2 className="section_title" >{singleCarItem.carName}</h2>

                            <div className="d-flex aling-items-center gap-5 mb-4 mt-3">

                                <h6 className="rent_price fw-bold fs-4">${singleCarItem.price}.00 / Day </h6>
                                <span className="d-flex aling-items-center gap-2">
                                    <span style={{ color: "#f9a826" }}>
                                        <StarIcon fontSize="small" ></StarIcon>
                                        <StarIcon fontSize="small" ></StarIcon>
                                        <StarIcon fontSize="small" ></StarIcon>
                                        <StarIcon fontSize="small" ></StarIcon>
                                        <StarIcon fontSize="small" ></StarIcon>
                                    </span>
                                </span>
                            </div>

                            <p className="section_description">
                                {singleCarItem.descipcion}
                            </p>
                            <div className="datailsCar " style={{ backgroundColor: "#f0f0f0" }}>
                                <h5 className="mb-0  fw-bold" >Detalles del Vehiculo </h5>

                                <div className="d-flex aling-items-center mt-3" style={{ columnGap: "3rem" }}>
                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <DirectionsCarFilledIcon ></DirectionsCarFilledIcon>{singleCarItem.model}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <SettingsIcon></SettingsIcon>{singleCarItem.transmision}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <DirectionsCarFilledIcon></DirectionsCarFilledIcon>{singleCarItem.motor}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <AcUnitIcon></AcUnitIcon>{singleCarItem.airconditionar}
                                    </span>
                                </div>

                                <div className="d-flex aling-items-center mt-2" style={{ columnGap: "3rem" }}>
                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <DirectionsCarFilledIcon ></DirectionsCarFilledIcon>{singleCarItem.model}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <SettingsIcon></SettingsIcon>{singleCarItem.transmision}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <DirectionsCarFilledIcon></DirectionsCarFilledIcon>{singleCarItem.motor}
                                    </span>

                                    <span className="d-flex aling-items-center gap-1 section_description">
                                        <AcUnitIcon></AcUnitIcon>{singleCarItem.airconditionar}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col lg='4' className="extras">
                        <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                            <h6> Incluido </h6>
                            <h4 className="fw-bold fs-4"> Tanque Lleno </h4>
                            <h6 className="mt-4"> <CheckIcon color="success" fontSize="small" /> Tanque lleno gratis</h6>
                        </div>
                    </Col>

                    <Col lg='4' className="extras">
                        <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                            <h6> Incluido </h6>
                            <h4 className="fw-bold fs-4"> Paquete de Proteccion Basica </h4>
                            <h6 className="mt-4"> <CheckIcon color="success" fontSize="small" /> Proteccion Contra colisiones</h6>
                            <h6></h6>
                        </div>
                    </Col>

                    <Col lg='3' className="extras">
                        <div className="booking-info mt-5" style={{ backgroundColor: "#f0f0f0" }}>
                            <h6 className="rent_price">${singleCarItem.price}.00 / Day </h6>
                            <button className='header_btn btn mt-4' style={{ color: "#f9a826", backgroundColor: "#fff" }}>
                                    Seleccionar
                            </button>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default CarsDetails;