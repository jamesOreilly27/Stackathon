const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const jsonOdds = require('./jsonOdds')

router.get('/nfl', (req, res, next) => {
    jsonOdds.get('https://jsonodds.com//api/odds/nfl')
    .then(res => res.data)
    .then(odds => res.json(odds))
    .catch(console.error)
})

router.get('/nba', (req, res, next) => {
    jsonOdds.get('https://jsonodds.com//api/odds/nba')
    .then(res => res.data)
    .then(odds => res.json(odds))
    .catch(console.error)
})




module.exports = router;


// const options = {
//     uri: `https://jsonodds.com/api/odds/nfl`,
//     headers: {
//         'JsonOdds-API-Key': "e7a1a157-5667-4fa8-bb7c-5defaf8092d3"
//     },
//     json: true // Automatically parses the JSON string in the response
// };
// rp(options)
// .then(odds => res.json(odds))