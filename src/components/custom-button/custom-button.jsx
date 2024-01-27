import React from 'react'
import './custom-button.scss'
import { Link } from 'react-router-dom';

const CustomButton = ({ children, route }) => (
    <Link className='button-container' to={route} >
        {children}
    </Link>
)


export default CustomButton