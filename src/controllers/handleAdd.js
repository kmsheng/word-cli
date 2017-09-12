const addWord = require('./../models/word/addWord');

module.exports = async function handleAdd(sentence, description, partStr) {

  const [, word] = sentence.match(/\[(.+)\]/) || [];

  if (! word) {
    return console.log('Word is not detected in the given sentence.');
  }
  if (! description) {
    return console.log('Description of a word is required.');
  }

  let part = ['n', 'v', 'a'].indexOf(partStr);

  if (-1 === part) {
    part = 0;
  }

  try {
    await addWord({word, sentence, description, part})
    console.log(`Word ${word} has been added.`);
  }
  catch (err) {
    if ('SQLITE_CONSTRAINT: UNIQUE constraint failed: Word.word, Word.part' === err.message) {
      console.log(`${word} ${partStr} exists.`);
    }
  }
}
