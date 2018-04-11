import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { TeamDetails } from '../components'
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

const DateAndWagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .875em;
  width: 30%;
  align-items: center;
`

const SubmitBetButton = styled.button`
  width: 12vw;
  height: 3vw;
  border-radius: .5em;
  font-size: 1.2em;
`

class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bet: {
        betterId: 8,
        poolId: props.poolId,
        matchId: props.newMatch.ID,
        matchTime: props.newMatch.MatchTime,
        homeTeam: props.newMatch.HomeTeam,
        awayTeam: props.newMatch.AwayTeam,
        playerPick: '',
        amount: 5,
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
      bet: { ...this.state.bet, playerPick: values[0], odds: parseFloat(values[1]) },
      boxes: boxUpdate
    })
  }

  handleTextChange(event) {
    console.log(event.target)
  }

  render() {
    const odds = this.props.newMatch.Odds[0]
    const game = this.props.newMatch
    return (
      <Form onSubmit={(event) => {
        event.preventDefault()
        this.props.makeBet(this.state.bet)
      }}>
        <TeamDetails
          name={game.AwayTeam}
          pointSpread={odds.PointSpreadAway} 
          checked={this.state.boxes.awayChecked}
          homeOrAway="away"
          handleChange={this.handleChange}
          leftSide
        />
        <DateAndWagerContainer>
          <div> {`Wager: 5 Pool Points`} </div>
          <SubmitBetButton type="submit"> Submit Bet </SubmitBetButton>
        </DateAndWagerContainer>
        <TeamDetails
          name={game.HomeTeam}
          pointSpread={odds.PointSpreadHome} 
          checked={this.state.boxes.homeChecked}
          homeOrAway="home"
          handleChange={this.handleChange}
        />
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
