const User = require('./user');
const Pool = require('./Pool');
const PoolPlayers = require('./poolPlayers');
const Bet = require('./bet');


/********** Associations **********/
Pool.belongsToMany(User, { through: PoolPlayers })
User.belongsToMany(Pool, { through: PoolPlayers })

Pool.hasMany(Bet)
Bet.belongsTo(User, { as: 'wager' })

module.exports = {
    User,
    Pool,
    PoolPlayers,
    Bet
}
