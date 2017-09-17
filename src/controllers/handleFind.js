const findWord = require('./../models/word/findWord');

module.exports = async function handleFind(word) {
  const rows = await findWord(word)
  if (0 === rows.length) {
    return console.log(`No result for ${word}.`);
  }

  const str = rows.map(({rowid, word, countAnswerCorrect, countAnswerWrong, sentence, description}) => {
    return `#${rowid} ${word} correct: ${countAnswerCorrect} wrong: ${countAnswerWrong} ${sentence} ${description}`
  })
  .join('\n');

  console.log(str);
}
