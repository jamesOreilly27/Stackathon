import React from 'react'
import { Navlink } from '../components'
import { Link } from 'react-router-dom'

const Header = () => (
        <header>
            <Link to='/' className="title">  
                Crypto Book-E
            </Link>
            <div className="navbar">
                <Navlink name="Login" />
                <Navlink name="Sign-Up" />
            </div>
        </header>
)

export default Header
