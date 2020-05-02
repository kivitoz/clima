const axios = require('axios');

const getCoordenadasLugar = async(lugar) => {

    const parseDireccion = encodeURI(lugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${parseDireccion}`,
        headers: { 'x-rapidapi-key': '0423917630msh9a5f52b06ba9462p182f2ajsnb2c2c5c2d9a1' }
    });

    try {
        const respuesta = await instance.get();

        if (respuesta.data.Results.index === 0) {
            throw new Error(`No se encontraron resultados para la direccion ${lugar}`);
            return false;
        } else {
            const data = respuesta.data.Results[0];
            const direccion = data.name;
            const lat = data.lat;
            const lon = data.lon;

            return {
                direccion: direccion,
                lat: lat,
                lon: lon
            }
        }
    } catch (e) {
        return false;
    }

}


module.exports = {
    getCoordenadasLugar
}