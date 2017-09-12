const listWords = require('./../models/listWords');

module.exports = async function handleList() {

  const str = (await listWords()).map(({rowid, word, part, description, sentence}) => `#${rowid} ${word} ${['n', 'v', 'a'][part]} ${description} ${sentence}`)
  .join('\n');

  console.log(str);
}
