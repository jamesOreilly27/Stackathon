const express = require('express'); 
const router = express.Router();
const {Pool, User, Bet} = require('../db/models')

router.get('/', (req, res, next) => {
    Pool.findAll()
    .then(pools => res.json(pools))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Pool.findById(id, { include: [
        { model: User },
        { model: Bet, as: 'placedBets' }
    ]})
    .then(pool => res.json(pool))
    .catch(next)
})

module.exports = router;
