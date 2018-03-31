import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createBetThunk } from '../store'

const Form = styled.form`
  padding: 1vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ rightSide }) => rightSide ? 'transform: rotate(180deg);' : ''}
`

const BetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .875em;
  width: 20vw;
  ${({ rightSide }) => rightSide ? 'transform: rotate(180deg);' : ''}
`

const DateAndWagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .875em;
  width: 30%;
  align-items: center;
`

class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bet: {
        betterId: 8,
        poolId: props.poolId,
        matchId: this.props.newMatch.ID,
        matchTime: this.props.newMatch.MatchTime,
        homeTeam: this.props.newMatch.HomeTeam,
        awayTeam: this.props.newMatch.AwayTeam,
        playerPick: '',
        oddsType: 'Points Spread',
        odds: 0
      },
      boxes: {
        awayChecked: false,
        homeChecked: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    let boxUpdate = {}
    name === 'away-box' ? boxUpdate = { awayChecked: !this.state.boxes.awayChecked, homeChecked: false } : boxUpdate = { awayChecked: false, homeChecked: !this.state.boxes.homeChecked }
    const values = event.target.value.split(',')
    this.setState({
      bet: {...this.state.bet, playerPick: values[0], odds: parseFloat(values[1]) },
      boxes: boxUpdate
    })
  }

  render() {
    const odds = this.props.newMatch.Odds[0]
    const game = this.props.newMatch
    return (
      <Form onSubmit={(event) => {
        event.preventDefault()
        this.props.makeBet(this.state.bet)
      }}>
      {console.log('STATE', this.state)}
        <label>
          <TeamContainer>
            <input
              type="checkbox"
              name="away-box"
              onChange={this.handleChange}
              value={[game.AwayTeam, odds.PointSpreadAway]} 
              checked={this.state.boxes.awayChecked}
            />
            <BetDetailContainer>
              <div>
                {game.AwayTeam}
              </div>
              <div>
                {parseInt(odds.PointSpreadAway) > 0 ? ` +${odds.PointSpreadAway}` : `${odds.PointSpreadAway}`}
              </div>
            </BetDetailContainer>
          </TeamContainer>
        </label>
        <DateAndWagerContainer>
          <div> {`Wager: 5 Pool Points`} </div>
          <button type="submit"> Submit Your Bet </button>
        </DateAndWagerContainer>
        <label>
          <TeamContainer rightSide>
            <input
            type="checkbox"
            name="home-box"
            onChange={this.handleChange}
            value={[game.HomeTeam, odds.PointSpreadHome]}
            checked={this.state.boxes.homeChecked}
          />
            <BetDetailContainer rightSide>
              <div>
                {`@ ${game.HomeTeam}`}
              </div>
              <div>
                {parseInt(odds.PointSpreadHome) > 0 ? `+${odds.PointSpreadHome}` : odds.PointSpreadHome}
              </div>
            </BetDetailContainer>
          </TeamContainer>
        </label>
      </Form>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  makeBet(bet) {
    dispatch(createBetThunk(bet))
  }
})

export default connect(mapState, mapDispatch)(Match)
