const argv = require('yargs')
    .option('b', {
        alias:'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption: true,
        default: 10,
        describe:'describe hasta donde va la tabla de multiplicar'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        if(isNaN(argv.h)){
            throw 'hasta donde debe ser un número'
        }
        return true
    })
    .argv;

module.exports = argv;