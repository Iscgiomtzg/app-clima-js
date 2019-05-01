const axios = require('axios');

const getLugarLatLong = async( direccion ) => {
    const encodedURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        headers: {
            'X-RapidAPI-Key': 'ee57b125f5mshe92629e07120271p18263ajsnf447673c1d7d'
        }
    });
    
    const resp = await instance.get();
    const data = resp.data.Results;
    const { name, lat, lon } = data[0];

    if( data.length === 0) throw new Error(`No hay resultados para ${ direccion }`);

    return {
        name, lat, lon
    }
}

module.exports = {
    getLugarLatLong
}