const db = require('./db');

module.exports = function listWords() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`SELECT rowid, * FROM Word LIMIT 10 OFFSET 1`, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
}
