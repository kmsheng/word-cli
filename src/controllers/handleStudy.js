const prompt = require('prompt');
const getRandomWord = require('./../models/word/getRandomWord');
const setCountAnswerCorrect = require('./../models/word/setCountAnswerCorrect');
const setCountAnswerWrong = require('./../models/word/setCountAnswerWrong');

module.exports = async function handleStudy() {

  (async function askQuestion() {

    const randomWord = await getRandomWord();

    if (! randomWord) {
      return console.log('You don\'t have any words yet.');
    }

    const sentence = randomWord.sentence.replace(/\[.+\]/, (matched) => '_ '.repeat(matched.length - 2).trim());

    prompt.start();
    prompt.get({properties: {input: {description: `\n${sentence}\n${randomWord.description}\n`}}}, async (err, res) => {

      if (err) {
        return;
      }
      const answer = randomWord.word;

      if (res.input === answer) {
        await setCountAnswerCorrect(randomWord.countAnswerCorrect + 1);
        console.log('correct\n\n');
      }
      else {
        await setCountAnswerWrong(randomWord.countAnswerWrong + 1);
        console.log(`Wrong, should be ${answer}\n\n`);
      }
      return askQuestion();
    });
  })();
}
