import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNFLOddsThunk, fetchNBAOddsThunk } from '../store'
import { MatchTable } from '../components'

class PoolDetail extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getNFLOdds()
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <MatchTable odds={this.props.odds} poolId={parseInt(this.props.match.params.id)}/>                 
                </div>
            </div>
        )
    }
}


const mapState = state => state

const mapDispatch = (dispatch) => {
    return {
        getNFLOdds() {
            dispatch(fetchNFLOddsThunk())
        },

        getNBAOdds() {
            dispatch(fetchNBAOddsThunk())
        }
    }
}

export default connect(mapState, mapDispatch)(PoolDetail)
