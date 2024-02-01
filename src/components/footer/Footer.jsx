import './footer.scss';
import { ReactComponent as Github} from '../../assets/github.svg';
import { ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import { NavLink} from 'react-router-dom';
import { ReactComponent as LogoPersonal} from '../../assets/sa-logo.svg';

const Footer = () => (
<footer>
        <div className='footer-container'>
            <div className='footer-logo-choice-container'>
             <LogoPersonal className ='choice-logo'/>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/projects'> PROJECTS </NavLink>
             <NavLink className ='choice' to='/skills'> SKILLS </NavLink>
             <NavLink className ='choice' to='/contact'> CONTACT ME </NavLink>
            </div>
            <div className='socials'>
            <a className ='social' href='https://github.com/SagidAnowar'> <Github/> </a>
            <a className ='social' href='www.linkedin.com/in/sagidanowar'> <LinkedIn/>  </a> 

            </div>

        </div>
</footer>
)

export default Footer