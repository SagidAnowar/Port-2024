import ProjectCarousel from '../../components/project-carousel/Project-carousel';
import ProjectDetails from '../../components/project-details/Project-details';
import CallToAction from '../../components/call-to-action/Call-to-action';
import { motion as Motion } from 'framer-motion';

const MorningAroma = ({ text }) => (

  <Motion.div
  initial={{ opacity: 0, x: -200 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 200 }}
  transition={{ duration: 0.7 }}
  >

    <div>
        <ProjectCarousel text={text}/>
        <ProjectDetails text={text}/>
        <CallToAction/>
    </div>

  </Motion.div>

);

export default MorningAroma;