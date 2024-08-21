import axios from 'axios';

// Define la URL base para tu API
const BASE_URL = 'http://localhost:3001/api/cars'; // Ajusta esta URL según sea necesario

// Función para obtener datos de la API
export const fetchCarData = async (localName) => {
    try {
        const response = await axios.get(`${BASE_URL}/${localName}`);
        // Extrae el array de autos desde la propiedad 'recordset' del objeto de respuesta
        return response.data.recordset; 
    } catch (error) {
        console.error('Error fetching car data:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
};