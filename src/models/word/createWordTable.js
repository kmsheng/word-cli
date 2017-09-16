const db = require('./../db');

module.exports = function createWordTable() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS Word (word TEXT, sentence TEXT,
        description TEXT, countAnswerCorrect INTEGER DEFAULT 0 NOT NULL,
        countAnswerWrong INTEGER DEFAULT 0 NOT NULL);
      `, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
