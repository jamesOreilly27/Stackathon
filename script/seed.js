const db = require('../server/db')
const { User, Pool, Bet, PoolPlayers } = require('../server/db/models')
const chalk = require('chalk');

async function seed() {
  await db.sync({ force: true })
  console.log(chalk.bgBlue.white.bold('db synced!'))

  const users = await Promise.all([
    User.create({ userName: 'OscarSwag', email: 'sofiaCoppola@email.com', password: '456' }),
    User.create({ userName: 'eddieMurphy', email: 'murphy@email.com', password: '123' }),
    User.create({ userName: 'melBrooks', email: 'melBrooks@email.com', password: '789' }),
    User.create({ userName: 'mrPink', email: 'quentin@email.com', password: '123' }),
    User.create({ userName: 'LostWuzDaBomb', email: 'lost@email.com', password: '123' }),
    User.create({ userName: 'knoblauchThrowAway', email: 'summerOf61@email.com', password: '123' }),
    User.create({ userName: 'shark_attack', email: 'foneHome@email.com', password: '123' }),
    User.create({ userName: 'down_with_batflek', email: 'CBRealBatman@email.com', password: '123' }),
    User.create({ userName: 'hobbit', email: 'LOTRdirector@email.com', password: '123' }),
    User.create({ userName: 'your_Avatar_here', email: 'titanic@email.com', password: '123' }),
    User.create({ userName: 'manwithnoname', email: 'Blondie@email.com', password: '123' }),
    User.create({ userName: 'surfs_up', email: 'PointBreak@email.com', password: '123' }),
    User.create({ userName: 'wonder_woman', email: 'DianeKicksAss@email.com', password: '123' }),
  ])

  const pools = await Promise.all([
    Pool.create({ title: 'MLB Points Spread', sport: 'mlb', deadline: '2018-04-10' }),
    Pool.create({ title: 'NBA Points Spread', sport: 'nba', deadline: '2018-04-10' }),
    Pool.create({ title: 'NBA Money Line', sport: 'nba', deadline: '2018-04-10' }),
    Pool.create({ title: 'MLB Money Line', sport: 'mlb', deadline: '2018-04-10' }),
    Pool.create({ title: 'NBA Over/Under', sport: 'nba', deadline: '2018-04-10' })
  ])

  const poolPlayers = await Promise.all([
    PoolPlayers.create({ poolId: pools[0].id, userId: users[7].id, poolPoints: 500 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[0].id, poolPoints: 390 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[1].id, poolPoints: 380 }),
    PoolPlayers.create({ poolId: pools[4].id, userId: users[2].id, poolPoints: 365 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[3].id, poolPoints: 345 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[4].id, poolPoints: 800 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[5].id, poolPoints: 275 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[6].id, poolPoints: 240 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[8].id, poolPoints: 200 }),
    PoolPlayers.create({ poolId: pools[4].id, userId: users[9].id, poolPoints: 135 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[10].id, poolPoints: 90 }),
    PoolPlayers.create({ poolId: pools[0].id, userId: users[11].id, poolPoints: 80 }),
    PoolPlayers.create({ poolId: pools[4].id, userId: users[12].id, poolPoints: 25 }),
    PoolPlayers.create({ poolId: pools[1].id, userId: users[7].id, poolPoints: 350 }),
    PoolPlayers.create({ poolId: pools[2].id, userId: users[7].id, poolPoints: 1000 }),
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