// app.js
import { registrarDestino, mostrarItinerario } from './gestionViajes.js';

const iniciarApp = () => {
registrarDestino('Paris', '2024-06-15', 'Avión');
registrarDestino('Londres', '2024-07-01', 'Tren');
mostrarItinerario();
};

iniciarApp();
