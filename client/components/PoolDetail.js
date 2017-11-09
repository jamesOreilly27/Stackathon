import React, {Component} from 'react'
import { connect } from 'react-redux'

const PoolDetail = ({ singlePool }) => {
    return (
        <div>
            {singlePool && console.log('USERS', singlePool.users)}
            Hello From Detail
        </div>
    )
}


const mapState = ({ singlePool }) => ({ singlePool })

export default connect(mapState)(PoolDetail)
