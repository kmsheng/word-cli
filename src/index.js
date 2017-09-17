#!/usr/local/bin/node

const program = require('commander');
const version = require('./../package.json').version;
const createWordTable = require('./models/word/createWordTable');
const createIndices = require('./models/createIndices');
const handleAdd = require('./controllers/handleAdd');
const handleList = require('./controllers/handleList');
const handleStudy = require('./controllers/handleStudy');
const handleRemove = require('./controllers/handleRemove');
const handleFind = require('./controllers/handleFind');

(async function main() {

  try {
    await createWordTable();
    await createIndices();
  }
  catch (err) {
    console.error(err);
  }

  program.version(version)
    .command('add [sentence] [description]')
    .description('Add a word data, wrap your answer in brackts if it\'s a sentence.')
    .action(handleAdd);

  program.command('list')
    .option('-p, --page <page>', 'Page number for listing words')
    .option('-pp, --per-page <perpage>', 'Specify how many words for listing per page.')
    .description('List words')
    .action(handleList);

  program.command('study')
    .description('Start to study words.')
    .action(handleStudy);

  program.command('rm')
    .description('Remove word by id.')
    .action(handleRemove);

  program.command('find')
    .description('Find a word')
    .action(handleFind);

  program.parse(process.argv);
})();
