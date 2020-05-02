const axios = require('axios');

const getClimaLugar = async(lat, lon, timeout = 1000) => {

    try {
        const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88ce7b1a2ebbacb3230416f7e94ef8fe&units=metric`);
        if (!respuesta) {
            throw new Error(`No se encontraron resultados para la ubicación LAT:${lat} LON:${lon}`);
            return false;
        } else {
            const data = respuesta.data.main;
            const temp = data.temp;
            const like = data.feels_like;

            return {
                temp: temp,
                like: like
            }
        }
    } catch (e) {
        return false;
    }

}


module.exports = {
    getClimaLugar
}