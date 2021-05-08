const argv = require('yargs').
    option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Toma la base para hacer la tabla de multiplicacion'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Lista la tabla por consola'
    })
    .option('h', {
        alias: 'Hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;


    module.exports = argv;