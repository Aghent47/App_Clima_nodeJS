const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9e08619396c75f786ee23ad1a37bbf46&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}