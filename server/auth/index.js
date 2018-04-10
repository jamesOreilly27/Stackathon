const router = require('express').Router()
const User = require('../db/models/user')

const wrongLoginInfoMessage = 'Could Not Login. Either the username or password provided are incorrect'

router.post('/login', (req, res, next) => {
  User.scope('bets-and-pools').findOne({where: {email: req.body.email}})
    .then(user => {
      console.log('TEST', user)
      if(!user) {
        res.status(401).send(wrongLoginInfoMessage)
      } else if(!user.correctPassword(req.body.password)) {
        res.status(401).send(wrongLoginInfoMessage)
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if(err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

module.exports = router
