import React from 'react'
import { Link } from "react-router-dom";
import './nav.scss'

const Nav = () => {
  return (
    <>
        <nav className="nav">
            <Link to="/" className='logo'>
                SA
            </Link>
            
            <ul>
                <li className="nav-item"> 
                    <Link to="/">HOME</Link> </li>
                <li className="nav-item"> 
                    <Link to="/projects">PROJECTS</Link> </li>
                <li className="nav-item"> 
                    <Link to="/skills">SKILLS</Link> </li>
                <li className="nav-item"> 
                    <Link to="/contact">CONTACT</Link> </li>
            </ul>
        </nav>
        <hr className='divider-line'></hr>
    </>
    )
}

export default Nav