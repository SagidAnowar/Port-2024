import './container-image.scss';

const ContainerImage =({image,home,project}) => {
    const containerImagePlaceClass = home==="home" ? 'container-image-home': `container-image-portfolio-${project}`
    return (
        <div 
            className={containerImagePlaceClass}
            alt='about-me'>   
        </div> 
    )
    
}

export default ContainerImage;