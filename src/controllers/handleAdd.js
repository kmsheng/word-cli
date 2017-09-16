const addWord = require('./../models/word/addWord');

module.exports = async function handleAdd(sentence, description) {

  let [, word] = sentence.match(/\[(.+)\]/) || [];

  if (! word) {
    word = sentence;
    sentence = `[${sentence}]`;
  }

  if (! description) {
    return console.log('Description of a word is required.');
  }

  try {
    await addWord({word, sentence, description})
    console.log(`Word ${word} has been added.`);
  }
  catch (err) {
    if ('SQLITE_CONSTRAINT: UNIQUE constraint failed: Word.sentence' === err.message) {
      console.log('sentence exists.');
    }
  }
}
