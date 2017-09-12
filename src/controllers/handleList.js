const listWords = require('./../models/word/listWords');

module.exports = async function handleList() {

  const words = await listWords();

  if (words.length > 0) {

    const str = words.map(({rowid, word, part, description, sentence}) => `#${rowid} ${word} ${['n', 'v', 'a'][part]} ${description} ${sentence}`)
    .join('\n');

    console.log(str);
  }
  else {
    console.log('You don\'t have any words yet.');
  }
}
