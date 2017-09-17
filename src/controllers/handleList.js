const listWords = require('./../models/word/listWords');
const countWords = require('./../models/word/countWords');

module.exports = async function handleList() {

  const page = this.page || 1;
  const perPage = this.perPage || 10;

  const words = await listWords(page, perPage);
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
