const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(23.190001, -109.760002)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {

        const lugarLatLng = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(lugarLatLng.lat, lugarLatLng.lng);
        return `La temperatura de ${lugarLatLng.direccion} es de ${temp}`;

    } catch (error) {
        return `No se encontraron datos para ${argv.direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);