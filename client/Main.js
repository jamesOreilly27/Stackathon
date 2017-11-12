import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { fetchUserThunk } from './store'
import { Header, PoolsNFL, PoolsNBA, NFLPoolDetail, NBAPoolDetail, Sidebar, UserProfile } from './components'

const Main = () => (
    <div>
        <Router history={history}>
            <div>
                <Header />
                <div className="main-flex">
                    <Sidebar />
                    <Switch>
                        <Route exact path='/' component={UserProfile} />
                        <Route exact path={'/pools/nfl'} component={PoolsNFL} />
                        <Route exact path={'/pools/nba'} component={PoolsNBA} />
                        <Route path={'/pools/nfl/:id'} component={NFLPoolDetail} />
                        <Route path={'/pools/nba/:id'} component={NBAPoolDetail} />
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
)

export default Main
