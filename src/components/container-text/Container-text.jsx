import './container-text.scss';

const ContainerText =({text}) => (
    <div>
        <div className='profile-pic'></div>
        <h1 className='h1-title'>{text.title}</h1>
        <p className='about-text'>
            {text.word}
        </p>
    </div>
)

export default ContainerText;