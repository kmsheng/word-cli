const db = require('./db');

module.exports = function listWords(...args) {
  const page = args[0] || 1;
  const perPage = args[1] || 10;
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
