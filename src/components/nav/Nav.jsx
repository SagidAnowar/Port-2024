import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.styles.jsx';
import { ReactComponent as LogoPersonal} from '../../assets/sa-logo.svg';
import HamburgerMenu from '../burger/burger.jsx';
import { Navbar } from './nav.styles.jsx';
import { HeaderContainer } from './nav.styles.jsx';
import { MenuBurger } from './nav.styles.jsx';
import { LogoContainer } from './nav.styles.jsx';
import { OptionsContainer } from './nav.styles.jsx';


const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen]=useState(false);

    const toggleHamburger =() => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return ( 
        
    <Navbar>
     <HeaderContainer>
         <LogoContainer hamburgerOpen={hamburgerOpen}>
            <LogoPersonal className="green-logo" />    
           
         </LogoContainer>
         <MenuBurger onClick={toggleHamburger}>
         <HamburgerMenu hamburgerOpen={hamburgerOpen}/>
         </MenuBurger>
         <OptionsContainer>
             <NavLink className ='options' to='/'> HOME </NavLink>
             <NavLink className ='options' to='/projects'> PROJECTS </NavLink>
             <NavLink className ='options' to='/skills'> SKILLS </NavLink>
             <NavLink className ='options' to='/contact'> CONTACT ME </NavLink>

         </OptionsContainer>
        

     </HeaderContainer>

 </Navbar>
 )
}

export default Nav