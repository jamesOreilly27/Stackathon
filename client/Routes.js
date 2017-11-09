import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { Main, PoolsNFL } from './components'

const Routes = () => (
    <div>
        <Router history={history}>
            <div>
                <Main />
                <Switch>
                    <Route path={'/pools/nfl'} component={PoolsNFL} />
                </Switch>
            </div>
        </Router>
    </div>
)

export default Routes
