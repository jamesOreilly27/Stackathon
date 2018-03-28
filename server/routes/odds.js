const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const jsonOdds = require('./jsonOdds')

router.get('/nfl', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/odds/nfl')
    .then(res => res.data)
    .then(odds => res.json(odds))
    .catch(console.error)
})

router.get('/:matchId', (req, res, next) => {
  const matchId = req.params.matchId
  jsonOdds.get(`https://jsonodds.com/api/odds/${matchId}`)
    .then(res => res.data)
    .then(matchOdds => res.json(matchOdds))
    .catch(console.error)
})

router.get('/nba', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/odds/nba')
    .then(res => res.data)
    .then(odds => res.json(odds))
    .catch(console.error)
})

router.get('/mlb', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/odds/mlb')
  .then(res => res.data)
  .then(odds => res.json(odds))
  .catch(console.error)
})

module.exports = router;
