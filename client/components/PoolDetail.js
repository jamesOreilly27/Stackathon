import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNFLOddsThunk } from '../store'

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
                {this.props.singlePool && console.log('USERS', this.props.singlePool.users)}
                Hello From Detail
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
