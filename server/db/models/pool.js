const db = require('../db');
const Sequelize = require('sequelize');

const Pool = db.define('pool', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sport: {
    type: Sequelize.STRING,
    allowNull: false
  },
  deadline: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isAfter: Sequelize.NOW
    }
  }
})

module.exports = Pool;