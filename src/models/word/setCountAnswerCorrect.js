const db = require('./../db');

module.exports = function setCountAnswerCorrect(countAnswerCorrect) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare('UPDATE Word SET countAnswerCorrect = ?');
      stmt.run(countAnswerCorrect, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
      stmt.finalize();
    });
  });
}
