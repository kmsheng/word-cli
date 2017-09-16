const db = require('./db');

module.exports = function createIndices() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('CREATE UNIQUE INDEX IF NOT EXISTS word_sentence_unique ON Word (sentence)', (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
