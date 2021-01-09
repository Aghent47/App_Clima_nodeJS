const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '5d24d6f896msh9bf4299f4a7f344p1a437djsnd53ed1ff5153' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultads para ${direction}`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}