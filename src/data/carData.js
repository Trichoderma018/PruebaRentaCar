//import axios from 'axios';

// Define una URL base para tu API
//const BASE_URL = 'https://api.example.com/cars';

//export const fetchCarData = async (local, transmision, categoria, tipoVeh, pasajeros) => {
//  try {
//    const response = await axios.get(BASE_URL, { params: { local, transmision, categoria, tipoVeh, pasajeros } });
//  return response.data;
//} catch (error) {
//  console.error('Error fetching car data:', error);
//throw error; // Lanza el error para que pueda ser manejado en el componente
//}
//};

const carData = [
    {
        id: 1,
        cod_local: 1,
        marca: "Nissan-Qashqai",
        model: "2024",
        tipo_vehiculo: "SUV",
        pasajeros: 5,
        price: 12,
        cant_puertas: 4,
        potencia_motor: "120CV",
        capacidad_maletas: 3,
        transmision: "Automatico",
        edad_minima: 21,
        aire_acond: "Si",
        categoria: "Hibrido",
        imgUrl: "../../public/all-images/car-images/NissanQaskai.png",
        descipcion:
            "wjdekjhdewk ewhwkefjhwfk kfjhkwefjhew fhwiuhf"
    },

    {
        id: 2,
        cod_local: 1,
        marca: "Turismo",
        model: "2025",
        tipo_vehiculo: "SUV",
        pasajeros: 5,
        price: 56,
        cant_puertas: 4,
        potencia_motor: "120CV",
        capacidad_maletas: 3,
        transmision: "Automatico",
        edad_minima: 21,
        aire_acond: "Si",
        categoria: "Gasolina",
        imgUrl: "../../public/all-images/car-images/HondaCivic.png",
        descipcion:
            "wjdekjhdewk ewhwkefjhwfk kfjhkwefjhew fhwiuhf"
    },

    {
        id: 3,
        cod_local: 1,
        marca: "Honda-Acord",
        model: "2019",
        tipo_vehiculo: "Sedan",
        pasajeros: 5,
        price: 56,
        cant_puertas: 2,
        potencia_motor: "120CV",
        capacidad_maletas: 3,
        transmision: "Manual",
        edad_minima: 21,
        aire_acond: "Si",
        categoria: "Gasolina",
        imgUrl: "../../public/all-images/car-images/NissanFrontier.png",
        descipcion:
            "wjdekjhdewk ewhwkefjhwfk kfjhkwefjhew fhwiuhf"
    },

    {
        id: 4,
        cod_local: 1,
        marca: "asasa-Qashqai",
        model: "2024",
        tipo_vehiculo: "Camioneta",
        pasajeros: 7,
        price: 12,
        cant_puertas: 4,
        potencia_motor: "120CV",
        capacidad_maletas: 3,
        transmision: "Automatico",
        edad_minima: 21,
        aire_acond: "Si",
        categoria: "Hibrido",
        imgUrl: "../../public/all-images/car-images/Tesla.png",
        descipcion:
            "wjdekjhdewk ewhwkefjhwfk kfjhkwefjhew fhwiuhf"
    },

    {
        id: 5,
        cod_local: 1,
        marca: "asasa",
        model: "2029",
        tipo_vehiculo: "SUV",
        pasajeros: 7,
        price: 12,
        cant_puertas: 5,
        potencia_motor: "120CV",
        capacidad_maletas: 3,
        transmision: "Automatico",
        edad_minima: 21,
        aire_acond: "Si",
        categoria: "Hibrido",
        imgUrl: "../../public/all-images/car-images/Bmw.png",
        descipcion:
            "dwqqqqqqqqqqh wiuefhweeeeeewiue eiffff wiiiiiiiiiiiwh fiwhefiw dsidfhw "
    },
]

export default carData;