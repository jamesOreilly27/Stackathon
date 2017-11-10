import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNFLOddsThunk } from '../store'
import {Match} from '../components'

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
                    {this.props.odds && this.props.odds.map(match => (
                        <Match newMatch={match} key={match.id} />
                    ))}
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
