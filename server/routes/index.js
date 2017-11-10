const express = require('express'); 
const router = express.Router();
const users = require('./users');
const pools = require('./pools');
const bets = require('./bets');
const odds = require('./odds')


router.use('/users', users);
router.use('/pools', pools);
router.use('/odds', odds)
router.use('/bets', bets)

router.get('/', (req, res, next) => {
    console.log(chalk.yellow('Hello World'))
})

module.exports = router;