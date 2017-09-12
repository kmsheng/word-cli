const db = require('./../db');

module.exports = function deleteWord(id) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`DELETE FROM Word WHERE rowid = ${id}`, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
