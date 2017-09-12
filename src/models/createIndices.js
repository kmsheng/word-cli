const db = require('./db');

module.exports = function createIndices() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('CREATE UNIQUE INDEX IF NOT EXISTS word_word_unique ON Word (word, part)', (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
