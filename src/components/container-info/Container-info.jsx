import './container-info.scss';
import ContainerImage from '../container-image/Container-image';
import ContainerText from '../container-text/Container-text';
import CustomButton from '../custom-button/custom-button';

const ContainerInfo = ({ button, text, route, home, portfolio, project, resumeButton }) => (
    <section className={portfolio==="portfolio" ? 'container-info-portfolio':  'container-info'}>

        <ContainerImage home={home} project={project}/>

        <div className={home==='home' ? 'text-button-container': 'text-button-portfolio'}>
            <div className='profile-pic'></div>
            
            <ContainerText text={text}/>
           
            <div className='portfolio-button'>
             {resumeButton ? resumeButton : 
             <>
                <CustomButton  route={route}>{button[1]}</CustomButton>
             </>}
            </div>
        </div>
        
    </section>
)

export default ContainerInfo;