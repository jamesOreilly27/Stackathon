const db = require('../server/db')
const { User, Pool, Bet, PoolPlayers } = require('../server/db/models')
const chalk = require('chalk');

async function seed () {
    await db.sync({force: true})
    console.log(chalk.bgBlue.white.bold('db synced!'))
  
    const users = await Promise.all([
        User.create({firstName: 'cody', lastName: 'greene', userName: 'codyGreene', email: 'cody@email.com', password: '456'}),
        User.create({firstName: 'eddie', lastName: 'murphy', userName: 'eddieMurphy', email: 'murphy@email.com', password: '123'})
    ])

    const pools = await Promise.all([
        Pool.create({title: 'NFL', deadline: '2017-11-20', image: 'https://assets.nerdwallet.com/blog/wp-content/uploads/2015/08/3405933244_e04b02154e_o.jpg'}),
        Pool.create({title: 'NCAAF', deadline: '2017-11-20', image: 'https://assets.nerdwallet.com/blog/wp-content/uploads/2015/08/3405933244_e04b02154e_o.jpg'})
    ])

    const poolPlayers = await Promise.all([
        PoolPlayers.create({ poolId: pools[0].id, userId: users[0].id }),
        PoolPlayers.create({ poolId: pools[0].id, userId: users[1].id  }),
        PoolPlayers.create({ poolId: pools[1].id, userId: users[0].id  }),
        PoolPlayers.create({ poolId: pools[1].id, userId:  users[1].id  })
    ])

    const Bets = await Promise.all([
        Bet.create({ matchId: '10', playerPick: 'Home Team', oddsType: 'money line', odds: 220, poolId: pools[0].id, betterId: users[0].id})
    ])
}

    seed()
    .catch(err => {
        console.error(err.message)
        console.error(err.stack)
        process.exitCode = 1
    })
    .then(() => {
        console.log(chalk.white.bgRed.bold('closing db connection'))
        db.close()
        console.log(chalk.white.bgGreen.bold('db connection closed'))
    })