import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchNFLPoolsThunk} from '../store'
import {Pool, CreatePoolForm} from '../components'

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
            <div style={{display: 'flex'}}>
                <div style={{
                    margin: '10vh 14vw',
                    textAlign: 'center',
                    boxShadow: '.1em .1em .3em #9C9'
                }}>
                    <div style={{
                        fontSize: '1.4em',
                        backgroundColor: '#0A0A0A'
                    }}>
                        NFL Pools
                    </div>
                    <div style={{
                        padding: '.5em',
                        backgroundColor: '#0A0A0A',
                        borderRadius: '.3em',
                    }}>
                    {pools && pools.map(pool => (
                        <Pool key={pool.id} pool={pool} />
                    ))}
                    </div>
                </div>
                <div style={{
                    margin: '12vh -5vw'
                }}>
                    <CreatePoolForm />
                </div>
            </div>
        )
    }
}

const mapState = ({ pools }) => ({ pools })

const mapDispatch = dispatch => ({
    getPools() {
        dispatch(fetchNFLPoolsThunk())
    }
})

export default connect(mapState, mapDispatch)(PoolsNFL)
