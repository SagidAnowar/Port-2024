import GetInTouch from '../../components/get-in-touch/Get-in-touch';
import GetInContact from '../../components/get-in-contact/Get-in-contact';
import { motion } from 'framer-motion';

const Contact = () => (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    <div>
        <GetInTouch></GetInTouch>
        <GetInContact></GetInContact>

    </div>
    </motion.div>

);

export default Contact;