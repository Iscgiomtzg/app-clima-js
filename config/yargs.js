const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: false
    }
});

module.exports = {
    argv
}