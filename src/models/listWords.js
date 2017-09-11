const db = require('./db');

module.exports = function listWords() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all('SELECT * FROM Word', (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
}
