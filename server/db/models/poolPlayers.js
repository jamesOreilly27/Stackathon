const db = require('../db');
const Sequelize = require('sequelize');
const Pool = require('./pool')
const User = require('./user')

const PoolPlayers = db.define('pool_players', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  poolPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 100
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
    timestamps: false
  })

module.exports = PoolPlayers;
