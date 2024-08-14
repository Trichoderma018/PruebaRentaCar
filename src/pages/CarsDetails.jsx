import React, { useEffect } from 'react';
import carData from '../data/carData.js';
import { Container, Col, Row } from "reactstrap";
import Helmet from "../componets/Helmet/HElmet.jsx";
import { useParams } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const CarsDetails = () => {

    const { slug } = useParams();
    console.log("carName from URL:", slug);

    const singleCarItem = carData.find((item) => item.carName === slug);
    console.log(singleCarItem);



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

                            <h5 className="mb-0  fw-bold" style={{backgroundColor: "#f0f0f0" }}>Detalles del Vehiculo </h5>
                            
                            <div className="d-flex aling-items-center" style={{columnGap: "3rem", backgroundColor: "#f0f0f0" }}>
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
                            
                            <div className="d-flex aling-items-center" style={{columnGap: "3rem", backgroundColor: "#f0f0f0" }}>
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
                    </Col>

                    <Col lg='7' className="">
                        <div className="booking-info mt-5">
                            <h5 className="mb-4 fw-bold"> Booking Information </h5>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    </Helmet>

};

export default CarsDetails;