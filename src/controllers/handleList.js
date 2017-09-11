const listWords = require('./../models/listWords');

module.exports = async function handleList() {

  const str = (await listWords()).map(({word, part, description, sentence}) => `${word} ${['n', 'v', 'a'][part]} ${description} ${sentence}`)
  .join('\n');

  console.log(str);
}
