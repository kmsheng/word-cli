const addWord = require('./../models/word/addWord');

module.exports = async function handleAdd(sentence, description) {

  const [, word] = sentence.match(/\[(.+)\]/) || [];

  if (! word) {
    return console.log('Answer is not detected in the given sentence.\nPlease wrap the answer in brackets. For example, today is a [good] day.');
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
