import axios from 'axios'

const GOT_ODDS = 'GOT_ODDS'

const gotOdds = odds => {
    return {
        type: GOT_ODDS,
        payload: odds
    }
}