import profile2 from '../assets/Book_shop.jpg'
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1}}
        className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span> </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            viewport={{ once: true }} 
            className="w-full lg:w-1/2 lg:p-3">
                <div className="flex items-center justify-center">
                    <img className='shadow hover:shadow-gray-700 rounded-2xl max-w-xs mb-2 lg:max-w-sm' src={profile2} alt="about" />
                </div>
              
            </motion.div>
            <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              viewport={{ once: true }} 
            className="w-full lg:w-1/2">
                <div className="justify-center lg:justify-start">
                    <p className="my-2 max-w-xl font-thin text-neutral-200 text-left ">I am a passionate Frontend Developer with hands-on experience 
                        gained through internships, specializing in crafting intuitive user interfaces using HTML, CSS, JavaScript, Bootstrap, 
                        React, and Redux. My journey in web development has equipped me with the skills to create responsive and dynamic web 
                        applications that enhance user experiences.</p>
                        <p className="my-2 max-w-xl font-thin text-neutral-200 text-left  ">Additionally, I am enthusiastic about Web3 technologies 
                            and have started projects that transition from Web2 to Web3, exploring decentralized applications and blockchain
                             integration. I am committed to continuous learning and innovation, aiming to contribute to projects that push the 
                             boundaries of technology and deliver exceptional value.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About