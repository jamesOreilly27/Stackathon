import React, {Component} from 'react'
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
                {pools && pools.map(pool => {
                    return <Pool newPool={pool} key={pool.id} />
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ pools }) => ({ pools })

const mapDispatchToProps = dispatch => ({
    getPools() {
        dispatch(fetchNFLPoolsThunk())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PoolsNFL)
