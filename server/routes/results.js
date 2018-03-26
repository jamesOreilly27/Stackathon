const express = require('express');
const router = express.Router();
const { Bet } = require('../db/models')
const jsonOdds = require('./jsonOdds')

router.get('/', (req, res, next) => {
  jsonOdds.get('https://jsonodds.com/api/results/nfl?final=true')
    .then(res => res.data)
    .then(results => res.json(results))
    .catch(console.error)
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  jsonOdds.get(`https://jsonodds.com/api/results/${id}`)
    .then(res => res.data)
    .then(result => res.json(result))
    .catch(console.error)
})

module.exports = router
