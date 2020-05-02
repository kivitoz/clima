const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

let descripcion = argv.descripcion;



/* lugar.getCoordenadasLugar(descripcion).then(respuesta => {
    console.log(respuesta);
}).catch(error => {
    console.log(error);
});


clima.getClimaLugar('-38.720001', '-62.279999').then(respuesta => {
    console.log(respuesta);
}).catch(error => {
    console.log(error);
});
 */
console.log(`Realizando búsqueda para ${descripcion}. Aguarde un momento por favor...`);

let getInfo = async(descripcion) => {
    try {
        const coordLugar = await lugar.getCoordenadasLugar(descripcion);
        if (coordLugar) {
            const climaLugar = await clima.getClimaLugar(coordLugar.lat, coordLugar.lon);
            if (climaLugar) {
                return `El clima para ${descripcion} es de ${climaLugar.temp} °C. Sensación térmica de  ${climaLugar.like}°C`;
            }
        }
        return `No es posible obtener el clima para ${descripcion}`;
    } catch (e) {
        return `No pudo obtenerse las coordenas y clima de ${descripcion}`;
    }
}



getInfo(descripcion).then(resp => {
    console.log(resp);
}).catch(e => {
    console.log('Error!!!', e);
});