import React from 'react'
import { Navlink, Sidebar } from '../components'

const Main = () => (
    <div>
        <header>  
            <h1 className="title">Crypto Book-E</h1>
            <div className="navbar">
                <Navlink name="NFL" />
                <Navlink name="NBA" />
            </div>
        </header>
        <div className="side-bar">
            <Sidebar />
        </div>
    </div>
)

export default Main
