const db = require('./../db');

module.exports = function addWord({word, sentence, description}) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare('INSERT INTO Word (word, sentence, description) VALUES (?, ?, ?)');
      stmt.run(word, sentence, description, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
      stmt.finalize();
    });
  });
}
