const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const { User, Pool, Bet } = require('../db/models');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id, {
    include: [
      { model: Pool },
      { model: Bet }
    ]
  })
    .then(user => res.json(user))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
    .then(update => res.json(update))
    .catch(next)
})

module.exports = router;
