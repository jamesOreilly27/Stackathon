import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { fetchUserThunk } from './store'
import { Header, PoolHome, Sidebar, UserDashboard, SportHome, Login } from './components'

const ContentContainer = styled.div`
  display: flex;
`

class Main extends Component {
  constructor(props) {
    super(props)
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
                <Route path={'/' || '/Login'} component={Login} />
                <Route exact path='/dashboard' component={UserDashboard} />
                <Route exact path={'/sports/:sport'} component={SportHome} />
                <Route path={'/pools/:sport/:id'} component={PoolHome} />
              </Switch>
            </ContentContainer>
          </div>
        </Router>
      </div>
    )
  }
}


const mapState = state => state

const mapDispatch = dispatch => {
  return {
    getUser() {
      dispatch(fetchUserThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(Main)
