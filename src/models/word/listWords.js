const db = require('./../db');

module.exports = function listWords(page, perPage) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`SELECT rowid, * FROM Word LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
}
