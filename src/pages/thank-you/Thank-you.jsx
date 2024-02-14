import UseAnimations from "react-useanimations";
import mail from 'react-useanimations/lib/mail';
import './thank-you.scss';
import CustomButton from "../../components/custom-button/Custom-button.jsx";
import { motion as Motion} from 'framer-motion';


const ThankYou =() => (
    <Motion.div className="bounce-in-top">

    <div className="animation">
        <UseAnimations  strokeColor="#33323D" className="animated" autoplay={true} speed={0.15} animation={mail} size={170} />
        <h1 className="thank-you">Thank You !</h1>
        <p className="thank-you-text">I will get back to you as soon as possible</p>
        <CustomButton  route={"/"}>HOME</CustomButton>
    </div>
    
    </Motion.div>
)

export default ThankYou;