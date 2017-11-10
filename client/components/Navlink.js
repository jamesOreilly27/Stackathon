import React from 'react'
import {Link} from 'react-router-dom'

const Navlink = ({ name }) => (
    <div className="nav-link-container">
        <Link to={`/pools/${name}`} className="link">
            {name}
        </Link>
    </div>
)   

export default Navlink
