import React, { useState, useEffect } from 'react';
import { fetchCarData } from '../data/carData'; // Importa las funciones necesarias
import CarItem from '../componets/UI/CarItem.jsx';
import { FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import '../styles/section-cars.css';
import TuneIcon from '@mui/icons-material/Tune';
import { useLocation } from 'react-router-dom';
import HeaderNavigation from '../componets/UI/HeaderNavigation.jsx';
const Cars = () => {
    
    // Estados para los filtros y datos
    const [transmision, setTransmision] = useState('');
    const [pasajeros, setPasajeros] = useState('');
    const [tipo_vehiculo, setTipoVeh] = useState('');
    const [tipo_gasolina, settipo_gasolina] = useState('');
    const [allCars, setAllCars] = useState([]); // Guarda todos los autos aquí
    const [filteredCars, setFilteredCars] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const query = new URLSearchParams(useLocation().search); // Obtén los parámetros de consulta
    const localName = query.get('localName'); // Lee el parámetro localName


     // Cargar los datos de la API cuando se monta el componente
     useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (localName) {
                    const data = await fetchCarData(localName); // Usa localName del contexto
                    setAllCars(data);
                    setFilteredCars(data); // Configura los datos obtenidos
                    localStorage.setItem('allCars', JSON.stringify(data));
                } else {
                    setError('Por favor, selecciona un lugar.');
                }
            } catch (error) {
                setError('Error al cargar los datos.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [localName]); // Ejecutar cuando localName cambie

    // Función para aplicar los filtros
    const applyFilters = () => {
        // Verificar si al menos un filtro está seleccionado
        if (!transmision && !pasajeros && !tipo_vehiculo && !tipo_gasolina) {
            setError('Por favor, seleccione al menos un filtro.');
            return;
        }

        setError('');

        // Obtener los datos cargados
        let filtered = [...allCars];

        // Filtrar los autos según los valores seleccionados
        if (transmision) {
            filtered = filtered.filter(car => car.transmision === transmision);
        }

        if (pasajeros) {
            filtered = filtered.filter(car => car.pasajeros === parseInt(pasajeros, 10));
        }

        if (tipo_vehiculo) {
            filtered = filtered.filter(car => car.tipo_vehiculo === tipo_vehiculo);
        }

        if (tipo_gasolina) {
            filtered = filtered.filter(car => car.tipo_gasolina === tipo_gasolina);
        }

        setFilteredCars(filtered);
    };

    // Función para limpiar los filtros
    const clearFilters = () => {
        setTransmision('');
        setPasajeros('');
        setTipoVeh('');
        settipo_gasolina('');
        setFilteredCars(allCars); // Restablece la lista de autos a la original
        setError('');
    };
   
    return (
        <section>
            <div className="section_filter mb-4">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <HeaderNavigation/>
                        </Col>
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
                                    <option value="Automatica">Automatica</option>
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
                            <Label for="tipo_gasolinaSelect">Combustible</Label>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="tipo_gasolina"
                                    id="tipo_gasolinaSelect"
                                    value={tipo_gasolina}
                                    onChange={e => settipo_gasolina(e.target.value)}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Gasolina">Gasolina</option>
                                    <option value="Super">Super</option>
                                    <option value="Electricidad">Electricidad</option>
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
                    {loading ? (
                        <p>Cargando...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        filteredCars.map(item => (
                            <CarItem item={item} key={item.placa} />
                        ))
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Cars;