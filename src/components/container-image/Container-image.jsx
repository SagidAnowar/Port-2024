import './container-image.scss';

const ContainerImage =({ home, project }) => {
    const containerImagePlaceClass = home==="home" ? 'container-image-home': `container-image-portfolio-${project}`
    
    return (
        <div className={containerImagePlaceClass}></div>
    )
    
}

export default ContainerImage;