import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOnePoolThunk } from '../store'

const YourActivePool = props => (
    <div className="pool-display">

        <div className="pool-title">
            {props.pool.title}
        </div>
        <div>
            Your Rank: 
        </div>
        <Link 
            to={`/pools/${props.pool.id}`}
        >
            <button 
                className="view-pool"
                onClick={(event) => {
                    props.getPool(props.pool)
                }}
            >
                View Pool
            </button>
        </Link>
    </div>
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
