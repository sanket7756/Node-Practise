const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log("Removing the note");
    }
})

// Create a list command
yargs.command({
    command: "list",
    describe: "Listing notes",
    handler: function() {
        console.log("Listing the notes");
    }
})

// Create a read command
yargs.command({
    command: "read",
    describe: "Reading notes",
    handler: function() {
        console.log("Reading the note");
    }
})

yargs.parse()
