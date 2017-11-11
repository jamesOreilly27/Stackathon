import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createBetThunk } from '../store'

class Match extends Component {
    constructor(props) {
        super(props)
        this.state= {
            betterId: 8,
            poolId: props.poolId,
            matchId: '',
            homeTeam: '',
            awayTeam: '',
            playerPick: '',
            oddsType: 'Points Spread',
            odds: 0
        }
        this.handleChange = this.handleChange.bind(this)

        this.game = this.props.newMatch
        this.odds = this.props.newMatch.Odds[0]
        this.homeTeam = { matchId: this.game.ID, matchTime: this.game.MatchTime, homeTeam: this.game.HomeTeam, awayTeam: this.game.AwayTeam, playerPick: this.game.HomeTeam, odds: parseInt(this.odds.PointSpreadHome)}
        this.awayTeam = { matchId: this.game.ID, matchTime: this.game.MatchTime, homeTeam: this.game.HomeTeam, awayTeam: this.game.AwayTeam, playerPick: this.game.AwayTeam, odds: parseInt(this.odds.PointSpreadAway)}
    }

    handleChange(event) {
        const value = event.target.value
        if(value === 'awayTeam') this.setState(this.awayTeam)
        else if(value === 'homeTeam') this.setState(this.homeTeam)
    }

    render() {
        const odds = this.odds
        return (
            <div className="match-container">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.makeBet(this.state)
                }}>
                    <div className="match-container-game">
                        <label className="team">
                            <input
                                type="checkbox"
                                onChange={this.handleChange}
                                value={'awayTeam'}
                            />
                            <div>
                                <div>
                                    {this.game.AwayTeam}
                                </div>
                                <div>
                                    {parseInt(odds.PointSpreadAway) > 0 ? ` +${odds.PointSpreadAway}` : `${odds.PointSpreadAway}` }
                                </div>
                            </div>
                        </label>
                        <div>
                            <div className="match-date">
                                <div className="wager-details-title">
                                    Date:
                                </div>
                                <div>
                                    {this.game.MatchTime.slice(0, 10)}
                                </div>
                            </div>
                            <div className="wager-details">
                                <div className="wager-details-title">
                                    Wager:
                                </div>
                                <div>
                                    5 Pool Points
                                </div>
                            </div>
                        </div>
                        <label className="team">
                            <input
                                type="checkbox"
                                onChange={this.handleChange}
                                value={'homeTeam'}
                            />
                            <div>
                                <div>
                                    {`@ ${this.game.HomeTeam}`}
                                </div>
                                <div>
                                    {parseInt(odds.PointSpreadHome) > 0 ? `+${odds.PointSpreadHome}` : odds.PointSpreadHome}
                                </div>
                            </div>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="submit-bet-button"
                    > 
                        Submit Your Bet
                    </button>
                </form>
            </div>
        )
    }
}

const mapState = state => state

const mapDispatch = (dispatch) => {
    return {
        makeBet(bet) {
            dispatch(createBetThunk(bet))
        }
    }
}

export default connect(mapState, mapDispatch)(Match)
