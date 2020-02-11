const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const urlEncoded = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${urlEncoded}`,
        headers: { 'x-rapidapi-key': 'f0e8481c8bmsh13e0b4f89474468p1c7fb0jsnaf7db195b0fc' }
    });

    const resp = await instance.get();
    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
        return;
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
};