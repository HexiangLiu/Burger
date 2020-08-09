const orm = require('../config/orm');

const burger = {
  all: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },

  create: (burger_name, cb) => {
    orm.insertOne('burgers', 'burger_name', burger_name, (res) => {
      cb(res);
    });
  },

  update: (id, cb) => {
    orm.updateOne('burgers', `id = ${id}`, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
