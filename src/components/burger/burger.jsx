import { NavLink } from 'react-router-dom';
import './burger.styles.jsx';
import { Hamburger } from './burger.styles.jsx';
import { HamburgerContainer } from './burger.styles.jsx';
import { Twirl as Humburger } from 'hamburger-react'


const HamburgerMenu = ( open ) => {
  
    return (
    <Hamburger>
    <Humburger
    color= {open.open ? "#FAFAFA" : "#33323D"}
    duration={0.5} 
    toggled= {open.open}  toggle={open.setOpen}
    />
    <HamburgerContainer open={open}>
             <NavLink onClick={!open.open} className ='burger-top'  to='/'> HOME </NavLink>
             <NavLink onClick={!open.open} className ='burger' to='/projects'> PROJECTS </NavLink>
             <NavLink onClick={!open.open} className ='burger' to='/skills'> SKILLS </NavLink>
             <NavLink onClick={!open.open} className ='burger-bottom' to='/contact'> CONTACT ME </NavLink>
    </HamburgerContainer>
    </Hamburger>
    
  )
}

export default HamburgerMenu;