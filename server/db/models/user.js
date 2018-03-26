const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 1000
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = User;