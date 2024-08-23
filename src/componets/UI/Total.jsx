import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import visaLogo from '../../../public/all-images/image-general/visaLogo.png';
import mastercardLogo from '../../../public/all-images/image-general/mastercardLogo.png';
import amexLogo from '../../../public/all-images/image-general/amexLogo.png';
import '../../styles/total.css'; // Importa el archivo CSS
import HeaderNavigation from '../UI/HeaderNavigation.jsx';
import Factura from '../UI/Factura.jsx';
import DateTime from '../UI/DateTime.jsx';
import ClientCard from '../UI/ClientCard.jsx';

const Total = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Función para formatear el número de tarjeta
    const formatCardNumber = (value) => {
        const numbers = value.replace(/\D/g, ''); // Remover caracteres no numéricos
        return numbers.replace(/(.{4})/g, '$1 ').trim(); // Insertar espacios cada 4 dígitos
    };

    // Función para formatear la fecha de expiración
    const formatExpiryDate = (value) => {
        const numbers = value.replace(/\D/g, ''); // Remover caracteres no numéricos
        if (numbers.length <= 2) {
            return numbers; // Solo los dígitos del mes
        }
        return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`; // Formato MM/YY
    };

    const handleCardNumberChange = (e) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);
    };

    const handleExpiryDateChange = (e) => {
        const formattedValue = formatExpiryDate(e.target.value);
        setExpiryDate(formattedValue);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Limpiar el número de tarjeta para el envío
        const cleanedCardNumber = cardNumber.replace(/\s/g, '');

        // Validar el número de tarjeta (ajustar según tus necesidades)
        if (!/^\d{13,19}$/.test(cleanedCardNumber)) {
            alert('Please enter a valid card number.');
            return;
        }

        try {
            const response = await fetch('https://api.example.com/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cardNumber: cleanedCardNumber,
                    expiryDate,
                    cvv,
                }),
            });

            const result = await response.json();
            console.log('Payment result:', result);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <Container>
            
            <Col lg='12'>
                <HeaderNavigation />
            </Col>
            <Col >
                <ClientCard />
            </Col>
            <Row>
                <Col className="text-center mb-5">
                    <div>
                        <h2>Seleccione sus fecha</h2>
                    </div>
                </Col>

                <Col lg='12' md='4' sm='3' className="text-center mb-5">
                    <div className='header_location d-flex aling-items-center 
                       gap-2'>

                        <DateTime
                            onStartDateChange={handleStartDateChange}
                            onEndDateChange={handleEndDateChange}
                        />
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col >
                    <Factura startDate={startDate} endDate={endDate} />
                </Col>
                <Col>
                    <div className="payment-form-container">
                        <div className="payment-form-left">
                            <h3>Credit Card</h3>
                            <h6>
                                The cardholder must be the same person who picks up the vehicle.
                            </h6>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        value={cardNumber}
                                        onChange={handleCardNumberChange}
                                        required
                                        placeholder="1234 5678 9012 3456"
                                        maxLength="19" // Limitar a 19 caracteres para incluir espacios
                                        inputMode="numeric" // Mostrar teclado numérico en dispositivos móviles
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        value={expiryDate}
                                        onChange={handleExpiryDateChange}
                                        required
                                        placeholder="MM/YY"
                                        maxLength="5" // Limitar a 5 caracteres (MM/YY)
                                        inputMode="numeric" // Mostrar teclado numérico en dispositivos móviles
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        required
                                        placeholder="123"
                                        maxLength="3" // Limitar a 4 caracteres
                                        inputMode="numeric" // Mostrar teclado numérico en dispositivos móviles
                                    />
                                </div>
                                <button type="submit" >Submit Payment</button>
                            </form>
                            <div className="card-logos">
                                <img src={visaLogo} alt="Visa" />
                                <img src={mastercardLogo} alt="MasterCard" />
                                <img src={amexLogo} alt="American Express" />
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>

        </Container>

    );
};

export default Total;