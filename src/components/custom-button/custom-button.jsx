import './custom-button.scss';
import { Link } from 'react-router-dom';


const CustomButton = ({ children, route, message, isNativeAnchor=false}) => (
    
    isNativeAnchor? <a className={message ? 'button-container-message': 'button-container'} href={route} target='_blank'>{children}</a> : <Link className={message ? 'button-container-message': 'button-container'} to={route} >
        {children}      
    </Link>
)

export default CustomButton;