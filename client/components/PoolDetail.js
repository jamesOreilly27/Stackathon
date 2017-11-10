import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNFLOddsThunk } from '../store'
import {MatchTable} from '../components'

class PoolDetail extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getOdds()
    }

    render() {
        return (
            <div>
                {console.log('ODDS', this.props.odds)}
                <h1>{this.props.title}</h1>
                <div>
                    <MatchTable odds={this.props.odds}/>                 
                </div>
            </div>
        )
    }
}


const mapState = state => state

const mapDispatch = dispatch => {
    return {
        getOdds() {
            dispatch(fetchNFLOddsThunk())
        }
    }
}
export default connect(mapState, mapDispatch)(PoolDetail)
