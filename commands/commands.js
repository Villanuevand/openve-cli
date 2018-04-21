'use strict';

const program = require('commander');
const Table = require ('cli-table');

const { getCommunities } = require('../src/service');

const configTable = {
    head: ['Nombre', 'Admins', 'Enlace'],
    colWidths: [35, 50, 40],
    style : {
        compact : false,
        'padding-left' : 1,
        head: ['green'],
    }
};

console.log('   ____                 _    ________');
console.log('  / __ \\____  ___  ____| |  / / ____/');
console.log(' / / / / __ \\/ _ \\/ __ \\ | / / __/');
console.log('/ /_/ / /_/ /  __/ / / / |/ / /___');
console.log('\\____/ .___/\\___/_/ /_/|___/_____/');
console.log('    /_/');

program
    .version('0.1.0')
    .usage('<comunidad> | <comunidades> [opciones]')
    .option('-l, --list', 'listado de todas las comunidades')
    .description('Obten todas las comunidades de OpenVE en tu terminal 💻  🇻🇪');

program
    .command('comunidades')
    .description('obten informacion sobre todas las comunidades')
    .option('-l, --list', 'listado de todas las comunidades')
    .action((cmd) => {
        if (cmd.parent.rawArgs[3] === '-l' || cmd.parent.rawArgs[3] === '--list' ) {
            console.log('\n ⏳ ...');
            getCommunities()
                .then((dataTable) => {
                    let _table = new Table(configTable);
                    dataTable.comunidades.map(item => {
                        _table.push([item.name || '', item.admins || '', item.link || '']);
                    });
                    console.log(_table.toString());
                });

        } else {
            program.help();
        }
    });


program.parse(process.argv);

module.exports = program;
