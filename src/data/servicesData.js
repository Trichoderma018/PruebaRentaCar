import axios from 'axios';

// Define la URL base para tu API
const BASE_URL = 'http://localhost:3001/api/serviceslist'; // Ajusta esta URL según sea necesario

// Función para obtener datos de la API
export const fetchServicesList = async () => {
    try {
        const response = await axios.get(BASE_URL); // Obtén los datos desde la URL
        return response.data.recordset; // Devuelve el array de servicios directamente
    } catch (error) {
        console.error('Error fetching services data:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
}