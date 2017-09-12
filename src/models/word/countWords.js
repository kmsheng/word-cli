const db = require('./../db');

module.exports = function countWords(...args) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.get('SELECT COUNT(*) FROM Word', (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res['COUNT(*)']);
      });
    });
  });
}
