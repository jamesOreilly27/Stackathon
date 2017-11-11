import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNFLOddsThunk, fetchNBAOddsThunk } from '../store'
import { MatchTable } from '../components'

class PoolDetail extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        if(poolType === 'NFL') this.props.getNFLOdds()
        else if(poolType === 'NBA') this.props.getNBAOdds()
    }

    render() {
        return (
            <div>
                {console.log('PROPS', this.props)}
                <h1>{this.props.title}</h1>
                <div>
                    <MatchTable odds={this.props.odds} poolId={parseInt(this.props.match.params.id)}/>                 
                </div>
            </div>
        )
    }
}


const mapState = state => state

const mapDispatch = (dispatch, ownProps) => {
    return {
        getNFLOdds() {
            console.log('OWN PROPS', ownProps)
            dispatch(fetchNFLOddsThunk())
        },

        getNBAOdds() {
            dispatch(fetchNBAOddsThunk())
        }
    }
}

export default connect(mapState, mapDispatch)(PoolDetail)
