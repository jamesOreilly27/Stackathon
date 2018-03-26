const express = require('express');
const router = express.Router();
const { Pool, User, Bet, PoolPlayers } = require('../db/models')
const chalk = require('chalk')

router.get('/nfl', (req, res, next) => {
  Pool.findAll({
    where: {
      sport: 'NFL'
    },
    include: [
      { model: User }
    ]
  })
    .then(pools => res.json(pools))
    .catch(next)
})

router.get('/nba', (req, res, next) => {
  Pool.findAll({
    where: {
      sport: 'NBA'
    },
    include: [
      { model: User }
    ]
  })
    .then(pools => res.json(pools))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Pool.findById(id, {
    include: [
      { model: User },
      { model: Bet, as: 'placedBets' }
    ]
  })
    .then(pool => res.json(pool))
    .catch(next)
})

router.post('/nfl', (req, res, next) => {
  Pool.create(req.body)
    .then(pool => res.json(pool))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  PoolPlayers.create({ poolId: req.params.id, userId: req.body.id, poolPoints: 500 })
    .then(added => res.json(added))
    .catch(next)
})

module.exports = router;
