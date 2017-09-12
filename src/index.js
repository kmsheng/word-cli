#!/usr/local/bin/node

const program = require('commander');
const version = require('./../package.json').version;
const createWordTable = require('./models/word/createWordTable');
const createIndices = require('./models/createIndices');
const handleAdd = require('./controllers/handleAdd');
const handleList = require('./controllers/handleList');
const handleStudy = require('./controllers/handleStudy');

(async function main() {

  try {
    await createWordTable();
    await createIndices();
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

  program.command('study')
    .description('Start to study words.')
    .action(handleStudy);

  program.parse(process.argv);
})();
