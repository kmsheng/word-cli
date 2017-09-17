const listWords = require('./../models/word/listWords');
const countWords = require('./../models/word/countWords');

module.exports = async function handleList() {

  const words = await listWords(this.page, this.perPage);
  const count = await countWords();

  if (words.length > 0) {

    const str = words.map(({rowid, word, countAnswerCorrect, countAnswerWrong}) => {
      return `#${rowid} ${word} correct: ${countAnswerCorrect} wrong: ${countAnswerWrong}`
    })
    .join('\n');

    console.log(str);
    console.log(`Total: ${count} words.`);
  }
  else {
    console.log('You don\'t have any words yet.');
  }
}
