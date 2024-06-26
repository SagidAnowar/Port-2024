import './project-resume.scss';
import { ReactComponent as Responsive} from '../../assets/responsive.svg';
import { ReactComponent as NodeJs} from '../../assets/nodejs.svg';
import { ReactComponent as Express} from '../../assets/express.svg';
import { ReactComponent as MongoDb} from '../../assets/mongodb.svg';
import { ReactComponent as Sass} from '../../assets/sass.svg';
import { ReactComponent as Javascript} from '../../assets/javascript.svg';
import { ReactComponent as ReactIcon} from '../../assets/react.svg';
import { ReactComponent as Redux} from '../../assets/redux.svg';
import { ReactComponent as Git} from '../../assets/git-icon.svg';
import { ReactComponent as TypeScript} from '../../assets/typescript.svg';
import { ReactComponent as MaterialUI} from '../../assets/material-ui.svg';
import { ReactComponent as TailwindCSS} from '../../assets/tailwind-css.svg';

  const iconTypes = {
    javascript: Javascript,
    responsive: Responsive,
    nodejs: NodeJs,
    express: Express,
    mongodb: MongoDb,
    sass: Sass,
    react: ReactIcon,
    redux: Redux,
    git: Git,
    typescript: TypeScript,
    materialUI: MaterialUI,
    tailwindCSS: TailwindCSS,
  };

  const IconComponent = (name) => {
    let Icon = iconTypes[name];
    return <Icon />;
  };

const ProjectResume = ({text}) => (

    <div className="resume" >
        {console.log(text)}
        <h1 className="project-title">{text.title}</h1>
        <p className="description">{text.project_resume_description}</p>
        <div className="skill-description">
            {text.project_resume_tech.map((element)=>(
                <div className="tech" key={element.toString()}>
                {IconComponent(element)}
                </div>
            ))}
        </div>
        <div className="project-buttons">
        <a  href={text.project_resume_website_link} className="visit">VISIT WEBSITE</a>
        <a  href={text.project_resume_code_link} className="visit">VIEW CODE</a>
        </div>
    </div>
    
);

export default ProjectResume;