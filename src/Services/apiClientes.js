import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// Función para crear un cliente
export const createCliente = async (clienteData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/clientes`, clienteData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};