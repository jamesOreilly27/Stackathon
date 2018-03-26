import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOnePoolThunk } from '../store'

const YourActivePool = props => (
  <Link to={`/pools/nfl/${props.pool.id}`} style={{ textDecoration: 'none' }}>
    <div className="pool-display">
      <div>
        {`ID: ${props.pool.id}`}
      </div>
      <div className="pool-title">
        {props.pool.title}
      </div>
    </div>
  </Link>
)
const mapState = state => state

const mapDispatch = dispatch => {
  return {
    getPool(pool) {
      dispatch(fetchOnePoolThunk(pool))
    }
  }
}

export default connect(mapState, mapDispatch)(YourActivePool)
