import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { fetchUserThunk } from './store'
import { Header, PoolDetail, Sidebar, UserProfile, SportHome } from './components'

const ContentContainer = styled.div`
  display: flex;
`

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser()
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
                <Route exact path='/' component={UserProfile} />
                <Route exact path={'/:sport'} component={SportHome} />
                <Route path={'/pools/:sport/:id'} component={PoolDetail} />
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
