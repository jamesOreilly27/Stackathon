import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchNFLPoolsThunk, fetchOnePoolThunk} from '../store'
import {Pool} from '../components'

class PoolsNFL extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPools()
    }

    render() {
        const pools = this.props.pools
        return (
            <div>
                {pools && pools.map(pool => (
                    <Link 
                        to={`/pools/${pool.id}`} 
                        key={pool.id} 
                        onClick={(event) => {
                                this.props.getPool(pool)
                            }
                        }
                    >
                        <Pool newPool={pool} />
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ pools }) => ({ pools })

const mapDispatchToProps = dispatch => ({
    getPools() {
        dispatch(fetchNFLPoolsThunk())
    },

    getPool(pool) {
        dispatch(fetchOnePoolThunk(pool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PoolsNFL)
