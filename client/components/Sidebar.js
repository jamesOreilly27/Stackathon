import React, {Component} from 'react'
import { Navlink } from '../components'

class Sidebar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Navlink name="NFL" />
                <Navlink name="NBA" />
            </div>
        )
    }
}

export default Sidebar
