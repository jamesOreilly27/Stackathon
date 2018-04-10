const User = require('./user');
const Pool = require('./Pool');
const PoolPlayers = require('./poolPlayers');
const Bet = require('./bet');


/***** Associations *****/
Pool.belongsToMany(User, { through: PoolPlayers })
User.belongsToMany(Pool, { through: PoolPlayers })

/***** Bet Associations *****/
// Pool to Bet
Pool.hasMany(Bet, { as: 'placedBets' })
Bet.belongsTo(Pool)

//User to Bet
User.hasMany(Bet, { foreignKey: 'betterId' })
Bet.belongsTo(User, { as: 'better' })

/***** SCOPES *****/
User.addScope('bets-and-pools', {
  include: [
    { model: Bet },
    { model: Pool }
  ]
})

module.exports = {
  User,
  Pool,
  PoolPlayers,
  Bet
}
