import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createBetThunk } from '../store'

const Wrapper = styled.div`
  width: 70vw;
  margin-bottom: 3vw;
  align-items: center;
`

const Form = styled.form`
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
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
`

const BetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .875em;
`

const DateAndWagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .875em;
`

class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.homeTeam = { matchId: this.game.ID, matchTime: this.game.MatchTime, homeTeam: this.game.HomeTeam, awayTeam: this.game.AwayTeam, playerPick: this.game.HomeTeam, odds: parseInt(this.odds.PointSpreadHome) }
    this.awayTeam = { matchId: this.game.ID, matchTime: this.game.MatchTime, homeTeam: this.game.HomeTeam, awayTeam: this.game.AwayTeam, playerPick: this.game.AwayTeam, odds: parseInt(this.odds.PointSpreadAway) }
  }

  handleChange(event) {
    const value = event.target.value
    if (value === 'awayTeam') this.setState(this.awayTeam)
    else if (value === 'homeTeam') this.setState(this.homeTeam)
  }

  render() {
    const odds = this.odds
    return (
      <Wrapper>
        <Form onSubmit={(event) => {
          this.props.makeBet(this.state)
        }}>
          <Container>
            <label>
              <TeamContainer>
                <input type="checkbox" onChange={this.handleChange} value={'awayTeam'} />
                <BetDetailContainer>
                  <div>
                    {this.game.AwayTeam}
                  </div>
                  <div>
                    {parseInt(odds.PointSpreadAway) > 0 ? ` +${odds.PointSpreadAway}` : `${odds.PointSpreadAway}`}
                  </div>
                </BetDetailContainer>
              </TeamContainer>
            </label>
            <DateAndWagerContainer>
              <div> {`Date: ${this.game.MatchTime.slice(0, 10)}`} </div>
              <div> {`Wager: 5 Pool Points`} </div>
            </DateAndWagerContainer>
            <label>
              <TeamContainer>
                <input type="checkbox" onChange={this.handleChange} value={'homeTeam'} />
                <BetDetailContainer>
                  <div>
                    {`@ ${this.game.HomeTeam}`}
                  </div>
                  <div>
                    {parseInt(odds.PointSpreadHome) > 0 ? `+${odds.PointSpreadHome}` : odds.PointSpreadHome}
                  </div>
                </BetDetailContainer>
              </TeamContainer>
            </label>
          </Container>
          <button type="submit"> Submit Your Bet </button>
        </Form>
      </Wrapper>
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
