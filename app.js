const { argv } = require('./config/yargs');
const { getLugarLatLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

// getLugarLatLong(argv.direccion)
//     .then( data => {
//     console.log(data);
// })
//     .catch( err => {
//     console.log(err);
// });

// getClima(data.lat, data.lon)
// .then( data =>{
//     console.log(data);
// })
// .catch( err => {
//     console.log(err);
// });

const getInfo = async(direccion) => {
    try {
        const coords = await getLugarLatLong(direccion);
        const temp = await getClima(coords.lat, coords.lon);
        return `El clima de ${ coords.name } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then( data => {
        console.log('Data: ', data); 
    })
    .catch( error => {
        console.log('Error: ', error); 
    });