const express = require('express')
const app = express()
const session = require('express-session')
const chalk = require('chalk')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const routes = require('./routes')
const path = require('path')
const PORT = 1337

const db = require('./db')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({db})
const passport = require('passport')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done))

const createApp = () => {
  //MiddleWare
  app.use(volleyball);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(express.static(path.join(__dirname, '..', 'public'))); 
  
  app.use(session({
    secret: process.env.SESSION_SECRET || 'Three may keep a secret, if two of them are dead',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize())
  app.use(passport.session())

  //Backend api routes will come from index.js in this folder 
  app.use('/api', routes);

  app.use('/static', express.static(path.join(__dirname, 'public')))
  
  //All Routes that haven't been hit by this point will send the index.html file
  app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
}

const startListening = () => {
  const server = app.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`))) 
}

const syncDb = () => db.sync()

if (require.main === module) {
  sessionStore.sync()
    .then(syncDb)
    .then(createApp)
    .then(startListening)
} else {
  createApp()
}
