import React from 'react'
import { Link } from 'react-router-dom'

const Sidelink = props => (
    <div className="sidelink">
        <Link to={`pools/${props.path}`}>
            {props.path}
        </Link>
    </div>
)

export default Sidelink
