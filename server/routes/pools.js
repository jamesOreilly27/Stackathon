const express = require('express'); 
const router = express.Router();
const {Pool, User} = require('../db/models')

router.get('/', (req, res, next) => {
    Pool.findAll({ include: [{ model: User }] })
    .then(pools => res.json(pools))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Pool.findById(id, { include: [{ model: User }] })
    .then(pool => res.json(pool))
    .catch(next)
})

module.exports = router;
