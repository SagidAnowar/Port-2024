import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <>
        <nav className="nav">
            <a href="/" className='logo'>
                SA
            </a>
            
            <ul>
                <li className="nav-item"> 
                    <a href="/">HOME</a> </li>
                <li className="nav-item"> 
                    <a href="/projects">PROJECTS</a> </li>
                <li className="nav-item"> 
                    <a href="/skills">SKILLS</a> </li>
                <li className="nav-item"> 
                    <a href="/contact">CONTACT</a> </li>
            </ul>
        </nav>
        <hr className='divider-line'></hr>
    </>
    )
}

export default Nav