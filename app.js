const {crearArchivoTabla}= require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombre=>console.log(nombre.rainbow))



