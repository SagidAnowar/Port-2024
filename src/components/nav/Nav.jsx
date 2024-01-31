import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './nav.scss'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <nav>
            <Link to="/" className='logo'>
                SA
            </Link>
            <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li> <NavLink to="/">HOME</NavLink> </li>
                <li> <NavLink to="/projects">PROJECTS</NavLink> </li>
                <li> <NavLink to="/skills">SKILLS</NavLink> </li>
                <li> <NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </nav>
        
    </>
    )
}

export default Nav