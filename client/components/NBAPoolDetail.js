import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchNBAOddsThunk, fetchOnePoolThunk } from '../store'
import { MatchTable, Leaderboard } from '../components'

class NBAPoolDetail extends Component {
    constructor(props) {
        super(props)
    }

    isParticipating() {
        return this.props.singlePool.users.filter(player => {
            return player.id === this.props.user.id
        })
        .length ? true : false
    }

    componentDidMount() {
        this.props.getNBAOdds()
    }

    render() {
        return (
            <div>
                <h1 style={{margin: '14vh 0 0 12vw'}}>
                    {this.props.singlePool.title}
                </h1>
                {this.props.singlePool.users && !this.isParticipating() &&
                <div style={{
                    margin: '5vh 55vw 2vh 18vw',
                    width: '15vw',
                    textAlign: 'center'
                }}>
                    <div>
                        Youre not in This Pool
                    </div>
                    <button>
                        Join Now
                    </button>
                </div>}
                <div style={{display: 'flex'}}>
                    {this.props.singlePool.users && <Leaderboard users={this.props.singlePool.users}/> }           
                        <MatchTable odds={this.props.odds} poolId={parseInt(this.props.match.params.id)} />
                </div>
            </div>
        )
    }
}

const mapState = state => state

const mapDispatch = dispatch => {
    return {
        getNBAOdds() {
            dispatch(fetchNBAOddsThunk())
        },

        getPoolDetail(id) {
            dispatch(fetchOnePoolThunk(id))
        }
    }
}

export default connect(mapState, mapDispatch)(NBAPoolDetail)