import './home.scss'
import CustomButton from "../../components/custom-button/Custom-button";
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <motion.div layout={"position"}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ duration: 0.7 }}
      >
  
        <div className='home-container' >
         
          <div className="title-block">
            <h1 className="title"> I’m Sagid Anowar and I enjoy building websites </h1>
          </div>
          {/* <CustomButton route={"/projects"}>GO TO PORTFOLIO</CustomButton> */}

        </div>

        

      </motion.div>
    </>
  )
}

export default Home;