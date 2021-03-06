const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion
/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(40.67, -73.94)
    .then(console.log)
    .catch(console.log) */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (err) {
        return `No se puedo determinar el clima de ${coords.direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);