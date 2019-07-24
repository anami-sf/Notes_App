//const validator = require('validator')
const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');

yargs.version('1.1.0')

//Create *add* command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title)
        console.log('Note: ' + argv.body)
    }
})

//Create *remove* command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note')
    }
})

//Create *list* command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
        console.log('Listing all notes')
    }
})

//Create *read* command
yargs.command({
    command: 'read',
    describe: 'reads notes',
    handler: function () {
        console.log('Reading notes', argv)
    }
})

yargs.parse()