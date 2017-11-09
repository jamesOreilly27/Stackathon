const express = require('express'); 
const router = express.Router();
const {User, Pool} = require('../db/models')

router.get('/', (req, res, next) => {
    User.findAll({ include: [{ model: Pool }] })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id, { include: [{ model: Pool }] })
    .then(user => res.json(user))
    .catch(next)
})

module.exports = router;
