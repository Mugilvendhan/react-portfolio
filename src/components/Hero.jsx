import {HERO_CONTENT} from '../constants'
import profile from '../assets/Mall_col.jpg'
import { motion } from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

  

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:px-8">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                    className="pb-16 text-5xl font-thin tracking-thin lg:mt-16 lg:text-6xl">Mugil Vendhan</motion.h1>
                    <motion.span
                      variants={container(0.5)}
                      initial="hidden"
                      animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-5">
                        Front-End Developer
                    </motion.span>
                    <motion.p 
                     variants={container(1)}
                     initial="hidden"
                     animate="visible"
                    className='my-2 max-w-xl font-thin  text-neutral-200 '><b>{HERO_CONTENT}</b></motion.p>
                    <motion.p 
                     variants={container(1)}
                     initial="hidden"
                     animate="visible"
                    className='my-2 max-w-xl font-thin  text-neutral-200 mb-5 text-center sm:text-left '>I am a passionate Frontend Developer dedicated to building intuitive and responsive web applications that elevate user engagement and innovative solutions.</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-6">
                <motion.div
                initial={{x:100,opacity:0}}
                animate={{x:0 , opacity:1}}
                transition={{duration:1.2, delay:1.3}}
                className="flex justify-center flex-wrap">
                    <img 
                    
                    className='shadow hover:shadow-gray-700 transition-transform  rounded-3xl max-w-xs lg:max-w-sm' src={profile} alt="profile" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero