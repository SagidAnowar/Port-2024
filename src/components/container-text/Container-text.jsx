import './container-text.scss';

const ContainerText =({text}) => (
    <div className='about-space'>
        <h1 className='about-title'>{text.title}</h1>
        <p className='about-text'>
            {text.word}
        </p>
    </div>
)

export default ContainerText;