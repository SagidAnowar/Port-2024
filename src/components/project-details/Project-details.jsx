import './project-details.scss';
import ProjectResume from '../project-resume/Project-resume';
import ProjectBackground from '../project-background/Project-background';

const PortfolioDetails =({ text }) => (
    <div className="portfolio-details">

        <ProjectResume text={text}/>
        <ProjectBackground text={text}/>

    </div>

)

export default PortfolioDetails;