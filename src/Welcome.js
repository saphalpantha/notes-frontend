import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Welcome.css'
const Welcome = () => {
  return (
    <div className='welcome'>
        <div className='welcome__link'>
            <NavLink to="/notes/">Notes</NavLink>
        </div>
            <div className='welcome__card'><h1>Create Read Delete Update Feature Included</h1><p>Journal writing gives us insights into who we are, who we were, and who we can become</p></div>
    </div>
  )
}

export default Welcome