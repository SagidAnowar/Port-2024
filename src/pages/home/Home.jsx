import './home.scss'
import CustomButton from "../../components/custom-button/custom-button";
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
  
        <div className='flex' >
          <div className="ripple">
            <div class="title-block">
              <h1 class="title"> I’m Sagid Anowar and I enjoy building websites </h1>
            </div>
          </div>
        </div>

        <CustomButton route={"/projects"}>GO TO PORTFOLIO</CustomButton>

      </motion.div>
    </>
  )
}

export default Home;