const db = require('../db');
const Sequelize = require('sequelize');

/********** Schema Design **********/
    //User id Foreign Key
    //Pool id Foreign Key

    /***** From JSONodds *****/
        //Match Id
        //Players Pick
        //Odds for Players Pick (money line, spread etc.)
        //Final: Boolean true or false


const Bet = db.define('bet', {
    matchId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    playerPick: {
        type: Sequelize.STRING,
        allowNull: false
    },
    oddsType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    final: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Bet
