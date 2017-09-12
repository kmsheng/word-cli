const deleteWord = require('./../models/word/deleteWord');

module.exports = async function handleRemove(id) {

  try {
    await deleteWord(id);
    console.log(`${id} has been removed.`);
  }
  catch (err) {
    console.log('delete error:', err);
  }
}
