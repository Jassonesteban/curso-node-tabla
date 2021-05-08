
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
var argv = require('./config/yargs');

console.log('base: yargs', argv.base);



crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));


