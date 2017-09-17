const findWord = require('./../models/word/findWord');

module.exports = async function handleFind(word) {
  const rows = await findWord(word)
  console.log(rows);
}
