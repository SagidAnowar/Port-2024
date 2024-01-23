import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
        <nav className="nav">
            <a href="/" className="logo">
                SA
            </a>
            
            <ul>
                <li className="nav-item"> 
                    <a href="/about">ABOUT</a> </li>
                <li className="nav-item"> 
                    <a href="/projects">PROJECTS</a> </li>
                <li className="nav-item"> 
                    <a href="/contact-me">CONTACT ME</a> </li>
            </ul>
        </nav>
    )
}

export default Nav