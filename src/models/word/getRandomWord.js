const db = require('./../db');

module.exports = function getRandomWord() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all('SELECT rowid, * FROM Word ORDER BY RANDOM() LIMIT 1', (err, [row]) => {
        if (err) {
          return reject(err);
        }
        resolve(row);
      });
    });
  });
}
