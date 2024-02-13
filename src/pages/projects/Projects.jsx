import ContainerInfo from '../../components/container-info/Container-info';
import CallToAction from '../../components/call-to-action/Call-to-action';
import { motion as Motion } from 'framer-motion';

// import OpenAiArticleSummarizer from '../openai-article-summarizer/Openai-article-summarizer';

const Projects = ({ button, text }) => (
    <Motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    
    <ContainerInfo  portfolio={"portfolio"} button={button} project={"morning_aroma"} route={'/morning-aroma'} text={text.morning_aroma} />
    <ContainerInfo  portfolio={"portfolio"} button={button} project={"youtube_V2"} route={'/youtube-V2'} text={text.youtube_V2} />
    <CallToAction/>
    
    </Motion.div>
);

export default Projects;