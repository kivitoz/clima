const optDesc = {
    demand: true,
    alias: 'd',
    desc: 'Dirección de la ubicación'
};

const argv = require('yargs')
    .options({
        descripcion: optDesc
    })
    .help().argv


module.exports = {
    argv
}