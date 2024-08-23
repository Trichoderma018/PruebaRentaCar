import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from "reactstrap";
import Helmet from "../componets/Helmet/HElmet.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchCarData } from '../data/carData'; 

// Importa los íconos
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
    const { marca } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        try {
            const allCars = JSON.parse(localStorage.getItem('allCars'));
            if (allCars) {

                
                const carItem = allCars.find(item => item.marca === marca);

                if (carItem) {
                    setCar(carItem);
                } else {
                    setError('Automóvil no encontrado');
                }
            } else {
                setError('No se encontraron datos de autos.');
            }
        } catch (error) {
            setError('Error al cargar los datos.');
        } finally {
            setLoading(false);
        }
    }, [marca]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!car) {
        return <p>No se encontraron detalles para este automóvil.</p>;
    }

    const handleSelectCar = () => {
        localStorage.setItem('selectedCar', car.marca); // Guarda el coche en localStorage
        navigate('/serviceslist');
    };

    return (
        <Helmet title={car.marca}>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={car.ruta_img} alt={car.marca} className="w-100" />
                        </Col>
                        <Col lg='5'>
                            <div className="car_info">
                                <h2 className="section_title">{car.marca}</h2>

                                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent_price fw-bold fs-4">${car.tarifa_alquiler}.00 / Day </h6>
                                    <span className="d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                            {[...Array(5)].map((_, index) => (
                                                <StarIcon key={index} fontSize="small" />
                                            ))}
                                        </span>
                                    </span>
                                </div>

                                <p className="section_description">
                                    {car.descripcion}
                                </p>
                                <div className="detailsCar">
                                    <h5 className="mb-0 fw-bold">Detalles del Vehículo</h5>

                                    <div className="icon-grid">
                                        <div className="icon-item">
                                            <DirectionsCarFilledIcon /> {car.modelo}
                                        </div>
                                        <div className="icon-item">
                                            <SettingsIcon /> {car.transmision}
                                        </div>
                                        <div className="icon-item">
                                            <EvStationIcon /> {car.tipo_gasolina}
                                        </div>
                                        <div className="icon-item">
                                            <AcUnitIcon /> {car.aire_acond}
                                        </div>

                                        <div className="icon-item">
                                            <PersonIcon /> {car.pasajeros}
                                        </div>
                                        <div className="icon-item">
                                            <LuggageIcon /> {car.capacidad_maletas}
                                        </div>
                                        <div className="icon-item">
                                            <DirectionsCarFilledIcon /> {car.cant_puertas}
                                        </div>
                                        <div className="icon-item">
                                            <BuildCircleIcon /> {car.potencia_motor}
                                        </div>

                                        <div className="icon-item">
                                            <GarageIcon /> {car.tipo_vehiculo}
                                        </div>
                                        <div className="icon-item">
                                            <ContactEmergencyIcon /> {car.edad_minima}
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
                                <h6 className="rent_price">${car.tarifa_alquiler}.00 / Day</h6>
                                <button className='header_btn btn mt-4' style={{ color: "#f9a826", backgroundColor: "#fff" }} onClick={handleSelectCar}>
                                    Seleccionar
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarsDetails;