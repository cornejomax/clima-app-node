const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4ce9213d4718303bb6a12eaffd441362&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}