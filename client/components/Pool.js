import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOnePoolThunk } from '../store'

const Pool = props => (
    <div className="pool-display">
        <img src={props.newPool.image} className="logo" />
            <div>
                Entry Fee: {props.newPool.entryFee}
            </div>
            <Link 
                to={`/pools/${props.newPool.id}`}
            >
                <button 
                    className="join-pool"
                    onClick={(event) => {
                        props.getPool(props.newPool)
                    }}
                >
                    Join Now
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

export default connect(mapState, mapDispatch)(Pool)
