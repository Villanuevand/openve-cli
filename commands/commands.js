'use strict';

const program = require('commander');
const { getCommunities } = require('../src/service');


program
    .version('0.1.0')
    .usage('<comunidad>|<comunidades> [opciones]')
    .description('Obten todas las comunidades de OpenVE en tu terminal');


program
    .command('comunidad')
    .description('obten informacion sobre una comunidad')
    .action( () => console.log('COMUNIDAD'));

program
    .command('comunidades')
    .description('obten informacion sobre todas las comunidades')
    .option('-l, --list', 'listado de todas las comunidades')
    .action( (arg) => {
        return getCommunities()
            .then(data => console.log('data: ', data.comunidades));
    });

program.parse(process.argv);
