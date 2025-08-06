//codigo inicial Actualizado//
// Array para guardar los destinos
import { destinos } from './destinos.js';

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
    case 'Paris': costoBase = 500; break;
    case 'Londres': costoBase = 400; break;
    case 'New York': costoBase = 600; break;
    default: costoBase = 300;
    }

    // Costo adicional por tipo de transporte
costoBase += transporte === 'Avión' ? 200 :
            transporte === 'Tren'  ? 100 : 50;

return costoBase;
};

export const mostrarItinerario = () => {
destinos.forEach(({ destino, fecha, transporte, costo }) => {
    console.log(`Destino: ${destino}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Costo: $${costo}`);
    console.log('---------------------------');
});
};
