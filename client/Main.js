import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { checkBetThunk, gotResultThunk } from './store'
import { Header, PoolHome, Sidebar, UserDashboard, SportHome, Login, SignUp } from './components'
import { isInProgress, settleBet, didHomeTeamWin, setWinner } from '../helpers'

const ContentContainer = styled.div`
  display: flex;
`

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.id !== nextProps.user.id) {
      nextProps.user.bets.forEach(bet => {
        if(!bet.final && isInProgress(bet)) {
          return this.props.getResult(bet.matchId)
          .then(response => {
            const result = response.payload[0]
            const modifiedBet = {...bet, final: result.Final}
            this.props.checkBet(settleBet(modifiedBet, result))
          })
        }
      }) 
    }
  }
  
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <ContentContainer>
              <Sidebar />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Sign-Up" component={SignUp} />
                <Route exact path="/dashboard" component={UserDashboard} />
                <Route exact path="/sports/:sport" component={SportHome} />
                <Route exact path="/pools/:sport/:id" component={PoolHome} />
              </Switch>
            </ContentContainer>
          </div>
        </Router>
      </div>
    )
  }
}


const mapState = state => state

const mapDispatch = dispatch => ({
  checkBet(bet) {
    dispatch(checkBetThunk(bet))
  },

  getResult(id) {
    return dispatch(gotResultThunk(id))
  }
})

export default connect(mapState, mapDispatch)(Main)
