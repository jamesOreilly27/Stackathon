import React, {Component} from 'react'
import { Sidelink } from '../components'

class Sidebar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="sidebar">
                <Sidelink path="NFL" />
                <Sidelink path="NBA" />
            </div>
        )
    }
}

export default Sidebar
