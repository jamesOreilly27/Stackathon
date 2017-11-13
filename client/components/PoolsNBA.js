import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNBAPoolsThunk } from '../store'
import { NBAPool } from '../components'

class PoolsNBA extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPools()
    }

    render() {
        const pools = this.props.pools
        return (
            <div style={{
                margin: '10vh 14vw',
                textAlign: 'center'
            }}>
                <div style={{
                    fontSize: '1.4em',
                    backgroundColor: '#0A0A0A'
                }}>
                    NBA Pools
                </div>
                <div style={{
                    padding: '.5em',
                    backgroundColor: '#0A0A0A',
                    borderRadius: '.3em'
                }}>
                {pools && pools.map(pool => (
                    <NBAPool key={pool.id} pool={pool} />
                ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ pools }) => ({ pools })

const mapDispatchToProps = dispatch => ({
    getPools() {
        dispatch(fetchNBAPoolsThunk())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PoolsNBA)
