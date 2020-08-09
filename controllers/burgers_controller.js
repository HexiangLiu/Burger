const express = require('express');
const burgers = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burgers.all((result) => {
    res.render('index', { burgers: result });
  });
});

router.post('/api/burgers', (req, res) => {
  console.log(req.body);
  const { burger_name } = req.body;

  burgers.create(burger_name, (result) => {
    if (!result.affectedRows) {
      res.status(500).end();
    } else {
      res.redirect('/');
    }
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const id = parseInt(req.params.id);

  burgers.update(id, (result) => {
    if (!result.changedRows) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
