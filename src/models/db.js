const mkdirp = require('mkdirp');
const path = require('path');

const dbPath = path.resolve(process.env.HOME, '.word-cli');

mkdirp.sync(dbPath);

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.resolve(dbPath, 'db.sqlite3'));

module.exports = db;
