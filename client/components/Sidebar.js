import React, { Component } from 'react'
import { Sidelink } from '../components'

class Sidebar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="sidebar" style={{ textAlign: 'center' }}>
        <h2>
          Sports
                </h2>
        <Sidelink path="NFL" />
        <Sidelink path="NBA" />
      </div>
    )
  }
}

export default Sidebar
