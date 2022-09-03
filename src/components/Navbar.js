import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      <>
        <div className='navbar-content'>
            <div className='navbar-heading'>
                #Around-The-World
            </div>

            <ul className='navbar-list'>
                <li className='navbar-list-item'><NavLink className='link' to='/'>Home</NavLink></li>
            </ul>
        </div>
      </>

  )
}
