import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { differenceInDays } from 'date-fns';
import '../../styles/factura.css';

const Factura = ({ startDate, endDate }) => {

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        try {
            const selectedCarName = localStorage.getItem('selectedCar');
            const allCars = JSON.parse(localStorage.getItem('allCars'));

            if (selectedCarName && allCars) {
                const carItem = allCars.find(item => item.marca === selectedCarName);
                if (carItem) {
                    setCar(carItem);
                } else {
                    setError('Automóvil no encontrado en la lista de coches.');
                }
            } else {
                setError('No se encontraron datos de autos o coche seleccionado.');
            }
        } catch (error) {
            setError('Error al cargar los datos del coche.');
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!car) return <div>No se encontró el coche.</div>;

    const dias = startDate && endDate ? differenceInDays(new Date(endDate), new Date(startDate)) : 0;//evaluacion de los dias en base a un rango de fechas
    const selectedPrice = localStorage.getItem('selectedPrice') || '0';
    
    let total_Renta = (dias* car.tarifa_alquiler);
    total_Renta =+ selectedPrice;
    
    return (
        <Container className="booking-review">
            <h2 className="title">Review</h2>

            <Row className="section">
                <Col>
                    <h3 className="section-title">Vehicle</h3>
                </Col>
                <Col className="text-end">
                    <div className="price">${car.tarifa_alquiler}</div>
                </Col>
            </Row>

            <Row className="section align-items-center">
                <Col xs="auto">
                    <Image
                        src={car.ruta_img}
                        alt={car.marca}
                        fluid
                        className="vehicle-image"
                    />
                </Col>
                <Col>
                    <>
                        <div className="vehicle-name">{car.marca}</div>
                        <div className="vehicle-info">{car.modelo}</div>
                    </>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    Basic rate
                </Col>
                <Col className="text-end">
                    <div>Included</div>
                    <div>$0.00</div>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    <h3 className="section-title">Hora de Recogida</h3>
                    <div>{startDate ? startDate.format('DD-MM-YYYY HH:mm') : 'No disponible'}</div>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    <h3 className="section-title">Hora de Devolucion</h3>
                    <div>{endDate ? endDate.format('DD-MM-YYYY HH:mm') : 'No disponible'}</div>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    <h3 className="section-title">Proteccion y Extras</h3>
                </Col>
                <Col className="text-end">
                    <div className="price"> ${selectedPrice}</div>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    <h3 className="section-title">Basic</h3>
                    <div>Included</div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3 className="section-title">Total</h3>
                </Col>
                <Col className="text-end">
                    <div className="total-price">${total_Renta + car.tarifa_alquiler}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default Factura;