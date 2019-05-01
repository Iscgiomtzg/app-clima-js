const axios = require('axios');

const getClima = async( lat, lon ) => {
    // const encodedURL = encodeURI(direccion);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=2ed9bfe0061f38d1100f000ff5ace3a9&units=metric`);
    if( resp.data.length === 0) throw new Error(`No hay resultados`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}