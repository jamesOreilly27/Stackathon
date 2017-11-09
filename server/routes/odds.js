const JsonOddsAPI = require('json-odds-api');
const jsonOdds = new JsonOddsAPI("e7a1a157-5667-4fa8-bb7c-5defaf8092d3")
const express = require('express');
const router = express.Router();

const getFullGameOdds = (sport) => (
    { sport: sport, oddType: "Game" }
)

router.get('/nfl', (req, res, next) => {
    jsonOdds.getOdds(getFullGameOdds('NFL'), function(err, response, body) {
        if (err) throw new Error(err);
        res.json(body);
      });
})

router.get('/nba', (req, res, next) => {
    jsonOdds.getOdds(getFullGameOdds('NBA'), function(err, response, body) {
        if (err) throw new Error(err);
        res.json(body);
      })
})




module.exports = router;
