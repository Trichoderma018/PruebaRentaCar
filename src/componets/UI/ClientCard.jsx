import React, { useState } from 'react';
import { createCliente } from '../../Services/apiClientes.js';
import '../../styles/ClientCard.css';

const ClientCard = () => {
    const [formData, setFormData] = useState({
        ced_cliente: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        fec_nacimiento: '',
        correo_electronico: '',
    });

    const [formStatus, setFormStatus] = useState({ message: '', type: '' });

    // Función para manejar el cambio en los campos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSave = async () => {
        try {
            await createCliente(formData);
            setFormStatus({ message: 'Cliente creado exitosamente', type: 'success' });
            setFormData({
                ced_cliente: '',
                nombre: '',
                apellido1: '',
                apellido2: '',
                fec_nacimiento: '',
                correo_electronico: '',
            });
        } catch (error) {
            setFormStatus({ message: 'Error al crear cliente', type: 'error' });
        }
    };

    return (
        <div className="client-card-form">
            <h2>Información del Conductor</h2>
            <div className="form-group">
                <label>
                    Cédula:
                    <input
                        type="text"
                        name="ced_cliente"
                        value={formData.ced_cliente}
                        onChange={handleInputChange}
                        placeholder="Número de Cédula"
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre"
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Apellido 1:
                    <input
                        type="text"
                        name="apellido1"
                        value={formData.apellido1}
                        onChange={handleInputChange}
                        placeholder="Primer Apellido"
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Apellido 2:
                    <input
                        type="text"
                        name="apellido2"
                        value={formData.apellido2}
                        onChange={handleInputChange}
                        placeholder="Segundo Apellido"
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Fecha de Nacimiento:
                    <input
                        type="date"
                        name="fec_nacimiento"
                        value={formData.fec_nacimiento}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Correo Electrónico:
                    <input
                        type="email"
                        name="correo_electronico"
                        value={formData.correo_electronico}
                        onChange={handleInputChange}
                        placeholder="Correo electrónico"
                    />
                </label>
            </div>
            <button onClick={handleSave}>Enviar</button>
            {formStatus.message && (
                <div className={formStatus.type === 'success' ? 'success' : 'error'}>
                    {formStatus.message}
                </div>
            )}
        </div>
    );
};

export default ClientCard;