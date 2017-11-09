const User = require('./user');
const Pool = require('./Pool');
const PoolPlayers = require('./poolPlayers');


/********** Associations **********/
Pool.belongsToMany(User, { through: PoolPlayers })
User.belongsToMany(Pool, { through: PoolPlayers })

module.exports = {
    User,
    Pool,
    PoolPlayers
}
