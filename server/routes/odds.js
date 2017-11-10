const express = require('express');
const router = express.Router();
const jsonOdds = require('./jsonOdds')

router.get('/nfl', (req, res, next) => {
    jsonOdds.get('/nfl')
})

router.get('/nba', (req, res, next) => {
    jsonOdds.getOdds(getFullGameOdds('NBA'), function(err, response, body) {
        if (err) throw new Error(err);
        res.json(body);
      })
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