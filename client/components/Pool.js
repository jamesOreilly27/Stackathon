import React from 'react'
import {Link} from 'react-router-dom'

const Pool = props => (
    <div className="pool-display">
        <img src={props.newPool.image} className="logo" />
        <div>
            Entry Fee: {props.newPool.entryFee}
            <Link 
                to={`/pools/${props.newPool.id}`}
            >
                <button 
                    className="join-pool"
                    onClick={(event) => {
                        this.props.getPool(newPool)
                    }}
                >
                    Join Now
                </button>
            </Link>
        </div>
    </div>
)

export default Pool

const mapDispatch = dispatch => {
    return {
        getPool(pool) {
            dispatch(fetchOnePoolThunk(pool))
        }
    }
}
