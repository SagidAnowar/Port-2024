import './custom-button.scss';
import { Link } from 'react-router-dom';


const CustomButton = ({ children,route,message}) => (
    
    <Link className={message ? 'button-container-message': 'button-container'} to={route} >
        {children}      
    </Link>
)

export default CustomButton;