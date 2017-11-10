import React from 'react'

const Match = props => {
    const odds = props.newMatch.Odds[0]
    const homePointSpread = parseInt()

    return (
        <div className="match-container">
            <div className="team">
                <div>
                    {props.newMatch.AwayTeam}
                </div>
                <div>
                    {parseInt(odds.PointSpreadAway) > 0 ? `+${odds.PointSpreadAway}` : odds.PointSpreadAway}
                </div>
            </div>
            <div>
                {props.MatchTime}
            </div>
            <div className={'team'}>
                <div>
                    {parseInt(odds.PointSpreadHome) > 0 ? `+${odds.PointSpreadHome}` : odds.PointSpreadHome}
                </div>
                <div>
                    {`@${props.newMatch.HomeTeam}`}
                </div>
            </div>
        </div>
    )
}

export default Match
