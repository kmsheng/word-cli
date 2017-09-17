const db = require('./../db');

module.exports = function findWord(word) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`SELECT rowid, * FROM Word WHERE word = '${word}'`, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
}
