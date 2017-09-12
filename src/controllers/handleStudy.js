const prompt = require('prompt');
const getRandomWord = require('./../models/word/getRandomWord');

module.exports = async function handleStudy() {

  (async function askQuestion() {
    const randomWord = await getRandomWord();
    const sentence = randomWord.sentence.replace(/\[.+\]/, (matched) => '_ '.repeat(matched.length - 2).trim());
    prompt.start();
    prompt.get({properties: {name: {description: sentence}}}, (err, res) => {
      if (err) {
        return;
      }
      return askQuestion();
    });
  })();
}
