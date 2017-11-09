const express = require('express'); 
const router = express.Router();
const {User, Pool, Bet} = require('../db/models')

router.get('/', (req, res, next) => {
    User.findAll({ include: [
        { model: Pool },
        { model: Bet }
    ]})
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id, { include: [
        { model: Pool },
        { model: Bet }
    ]})
    .then(user => res.json(user))
    .catch(next)
})

module.exports = router;
