import './home.scss'
import { motion as Motion} from 'framer-motion'
import ContainerInfo from '../../components/container-info/Container-info'
import CallToAction from '../../components/call-to-action/Call-to-action'
import { ReactComponent as MovingImage} from '../../assets/moving-image.svg';
import CustomButton from '../../components/custom-button/Custom-button.jsx';
import PDF from '../../assets/resume.pdf'

const Home = ({ button, text }) => (

    <Motion.div layout={"position"}
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    
    <div >
        <div className='flex' >
            <div className="ripple">
                <MovingImage/>

                <div className="title-block">
                    <h1 className="title"> I’m Sagid Anowar and I enjoy building websites </h1>
                </div>
            </div>
        </div>
       
        <ContainerInfo home={'home'} route={'/projects'} button={button} text={text.about_me} resumeButton={<><CustomButton  route='/projects'>VIEW PROJECTS</CustomButton> <CustomButton route={PDF} isNativeAnchor>VIEW RESUME</CustomButton></>}/> 
        
        <CallToAction />
    </div>

    </Motion.div>
)

export default Home;

