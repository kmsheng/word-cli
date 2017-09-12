const db = require('./../db');

module.exports = function createWordTable() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS Word (word TEXT, part INTEGER DEFAULT 0 NOT NULL, sentence TEXT,
        answerWrong INTEGER DEFAULT 0 NOT NULL);
        description TEXT, countAnswerCorrect INTEGER DEFAULT 0 NOT NULL,
      `, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
