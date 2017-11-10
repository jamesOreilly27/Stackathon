const express = require('express'); 
const router = express.Router();
const {Bet} = require('../db/models')

router.get('/', (req, res, next) => {
    Bet.findAll()
    .then(bets => res.json(bets))
})

router.get('/:id', (req, res, next) => {
    Bet.findById(req.params.id)
    .then(bet => res.json(bet))
})

router.post('/', (req, res, next) => {
    Bet.create(req.body)
    .then(newBet => res.json(newBet))
})

module.exports = router;
