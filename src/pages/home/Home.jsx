import './home.scss'
import { motion } from 'framer-motion'
import ContainerInfo from '../../components/container-info/Container-info'
import CallToAction from '../../components/call-to-action/Call-to-action'
import { ReactComponent as MovingImage} from '../../assets/moving-image.svg';

const Home = ({images,button,text}) => (

    <motion.div layout={"position"}
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    
    <div >
        <div className='flex' >
        <div className="ripple">
        <MovingImage/>
        <div class="title-block">
        <h1 class="title"> I’m Sagid Anowar and I enjoy building websites </h1>
        </div>
        </div>

        </div>
        
        <ContainerInfo home={'home'} route={'/projects'} images={images.about_me.src} button={button[0]} text={text.about_me}/> 
        
        <CallToAction />
    </div>
    </motion.div>
)

export default Home;

