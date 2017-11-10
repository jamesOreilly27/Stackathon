import React, {Component} from 'react'

class Match extends Component {
    constructor(props) {
        super(props)
        this.state= {
            matchId: '',
            playerPick: '',
            oddsType: 'Points Spread',
            odds: 0
        }
        this.handleChange = this.handleChange.bind(this)

        this.game = this.props.newMatch
        this.odds = this.props.newMatch.Odds[0]
        this.homeTeam = {matchId: this.game.ID, playerPick: this.game.HomeTeam, odds: this.odds.PointSpreadHome}
        this.awayTeam = { matchId: this.game.ID, playerPick: this.game.AwayTeam, odds: this.odds.PointSpreadAway}
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
                <form>
                    <div className="match-container-game">
                        {console.log('STATE', this.state, this.props.newMatch.id)}
                        <label className="team">
                            <input
                                type="checkbox"
                                onChange={this.handleChange}
                                value={'awayTeam'}
                            />
                            <div>
                                <div>
                                    {`${this.game.AwayTeam}`}
                                </div>
                                <div>
                                    {parseInt(odds.PointSpreadAway) > 0 ? ` +${odds.PointSpreadAway}` : `${odds.PointSpreadAway}` }
                                </div>
                            </div>
                        </label>
                        <div className="point-value">
                            5 Pool Points
                        </div>
                        <label className="team">
                            <input
                                type="checkbox"
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

export default Match
