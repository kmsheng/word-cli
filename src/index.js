#!/usr/local/bin/node

const program = require('commander');
const version = require('./../package.json').version;
const createWordTable = require('./models/createWordTable');
const handleAdd = require('./controllers/handleAdd');
const handleList = require('./controllers/handleList');

(async function main() {

  try {
    await createWordTable();
  }
  catch (err) {
    console.error(err);
  }

  program.version(version)
    .command('add [sentence] [description] [part]')
    .description('Add a word data')
    .action(handleAdd);

  program.command('list')
    .description('List words')
    .action(handleList);

  program.parse(process.argv);
})();
