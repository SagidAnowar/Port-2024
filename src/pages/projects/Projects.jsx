import ContainerInfo from '../../components/container-info/Container-info';
import CallToAction from '../../components/call-to-action/Call-to-action';
import { motion as Motion } from 'framer-motion';

// import OpenAiArticleSummarizer from '../openai-article-summarizer/Openai-article-summarizer';

const Projects = ({ images, button,text }) => (
    <Motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    
    <ContainerInfo  portfolio={"portfolio"} project={"openai_article_summarizer"} route={'/openai_article_summarizer'} button={button[1]} text={text.openai_article_summarizer} image={images.crown_clothing.src}/>
    <ContainerInfo  portfolio={"portfolio"} project={"youtube_V2"} route={'/youtube_V2'} button={button[1]} text={text.youtube_V2} />
    <CallToAction/>
    
    </Motion.div>
);

export default Projects;