import './container-image.scss';

const ContainerImage =({image,home,project}) => (
    <div 
        className={home==="home" ? 'container-image-home': 'container-image-portfolio-'+project} 
        style={{backgroundImage: "url(" + image + ")"}} 
        alt='about-me'>   
    </div> 
)

export default ContainerImage;