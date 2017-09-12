const db = require('./../db');

module.exports = function setCountAnswerWrong(countAnswerWrong) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare('UPDATE Word SET countAnswerWrong = ?');
      stmt.run(countAnswerWrong, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
      stmt.finalize();
    });
  });
}
