const db = require('./db');

module.exports = function addWord({word, sentence, description, part}) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare('INSERT INTO Word (word, sentence, description, part) VALUES (?, ?, ?, ?)');
      stmt.run(word, sentence, description, part, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
      stmt.finalize();
    });
  });
}
