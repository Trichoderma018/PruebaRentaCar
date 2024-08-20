import React, { useState } from 'react';
import carData from '../data/carData.js';
import CarItem from '../componets/UI/CarItem.jsx';
import { FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import '../styles/section-cars.css'
import TuneIcon from '@mui/icons-material/Tune';




const Cars = () => {
    // Estado para los filtros
    const [transmision, setTransmision] = useState('');
    const [pasajeros, setPasajeros] = useState('');
    const [tipo_vehiculo, setTipoVeh] = useState('');
    const [categoria, setCategoria] = useState('');
    const [filteredCars, setFilteredCars] = useState(carData);
    const [error, setError] = useState('');

    // Función para aplicar los filtros
    const applyFilters = () => {
        // Verificar si al menos un filtro está seleccionado
        if (!transmision && !pasajeros && !tipo_vehiculo && !categoria) {
            setError('Por favor, seleccione al menos un filtro.');
            return;
        }

        setError('');

        // Filtrar los autos según los valores seleccionados
        let filtered = carData;

        if (transmision) {
            filtered = filtered.filter(car => car.transmision === transmision);
        }

        if (pasajeros) {
            filtered = filtered.filter(car => car.pasajeros === parseInt(pasajeros, 10));
        }

        if (tipo_vehiculo) {
            filtered = filtered.filter(car => car.tipo_vehiculo === tipo_vehiculo);
        }

        if (categoria) {
            filtered = filtered.filter(car => car.categoria === categoria);
        }

        setFilteredCars(filtered);
    };

    // Función para limpiar los filtros
    const clearFilters = () => {
        setTransmision('');
        setPasajeros('');
        setTipoVeh('');
        setCategoria('');
        setFilteredCars(carData); // Restablece la lista de autos a la original
        setError('');
    };

    return (
        <section>
            <div className="section_filter mb-4">
                <Container>
                    <Row>
                        <h1 className="section_title mb-5"> Elige tu Vehiculo</h1>
                        <Col lg='2'>
                            <div className="section_filter-left">
                                <span><TuneIcon /></span>
                                <span className="header_top_help">Filtros</span>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <Label for="transmisionSelect">Transmisión</Label>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="transmision"
                                    id="transmisionSelect"
                                    value={transmision}
                                    onChange={e => setTransmision(e.target.value)}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatico">Automatico</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg='2'>
                            <Label for="pasajerosSelect">Pasajeros</Label>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="Pasajeros"
                                    id="pasajerosSelect"
                                    value={pasajeros}
                                    onChange={e => setPasajeros(e.target.value)}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="5">5</option>
                                    <option value="7">7</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg='2'>
                            <Label for="tipo_vehSelect">Tipo de Vehiculo</Label>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="tipo_veh"
                                    id="tipo_vehSelect"
                                    value={tipo_vehiculo}
                                    onChange={e => setTipoVeh(e.target.value)}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Camioneta">Camioneta</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg='2'>
                            <Label for="categoriaSelect">Categoria</Label>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="categoria"
                                    id="categoriaSelect"
                                    value={categoria}
                                    onChange={e => setCategoria(e.target.value)}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Gasolina">Gasolina</option>
                                    <option value="Hibrido">Hibrido</option>
                                    <option value="Electrico">Electrico</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg='2' className="text-end">
                            <button className='search_btn btn' onClick={applyFilters}>
                                Buscar
                            </button>
                            <button className='clear_btn btn ms-2' onClick={clearFilters}>
                                Limpiar
                            </button>
                        </Col>
                        <Col lg='12'>
                            <div className="footer_bottom1">
                                <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4"></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5 ">
                        <h6 className="section_subtitle">Nuestros Autos</h6>
                        <h2 className="section_title">El Mejor precio Aquí</h2>
                    </Col>
                    {filteredCars.slice(0, 6).map(item => (
                        <CarItem item={item} key={item.id} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Cars;