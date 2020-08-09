const connection = require('./connection');

const orm = {
  selectAll: (tableName, cb) => {
    connection.query('SELECT * FROM ??', [tableName], (err, res) => {
      if (err) throw err;

      cb(res);
    });
  },

  insertOne: (tableName, colName, value, cb) => {
    connection.query(
      'INSERT INTO ?? SET ?',
      [tableName, { [colName]: value }],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },

  updateOne: (tableName, condition, cb) => {
    console.log(condition);
    connection.query(
      'UPDATE ?? SET devoured = TRUE WHERE ' + condition,
      [tableName],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },
};

module.exports = orm;
