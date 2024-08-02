import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiOpensea } from "react-icons/si"
import EmailButton from "./Email"
import { motion } from "framer-motion";
import logo from "../assets/Logo_black.jpg"

const iconVariants = (duration)=>({
    initial:{y:10},
    animate:{
        y:[2,-2],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-5">
    <motion.h2 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:1}}
    /*  viewport={{ once: true }}  */
    className="my-10 text-center text-4xl">Get in Touch</motion.h2>



    <div className="text-center tracking-tighter">
    <motion.div 
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1}}
     viewport={{ once: true }} 
    className='m-8 flex item-center justify-center gap-4 text-2xl' >
     <motion.a 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
     target="_blank" href="https://www.linkedin.com/in/mugilvendhan/"><FaLinkedin/></motion.a> 
       <motion.a
       variants={iconVariants(2)}
       initial="initial"
       animate="animate"
       target="_blank" href="https://github.com/Mugilvendhan"><FaGithub/></motion.a> 
        <motion.a 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        target="_blank" href="https://www.instagram.com/mugil__mugi/"><FaInstagram/></motion.a>
       <motion.a 
       variants={iconVariants(3.5)}
       initial="initial"
       animate="animate"
       target="_blank" href="https://x.com/MugilVendhan36"><FaSquareXTwitter/></motion.a>
       <motion.a 
       variants={iconVariants(4)}
       initial="initial"
       animate="animate"
       target="_blank" href="https://opensea.io/MugilGMV"> <SiOpensea/> </motion.a>
    </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
         viewport={{ once: true }} 
        className="mb-4">
            <EmailButton/>
        </motion.div> 
        <div className="flex items-center justify-center ">
        <a className="scroll-smooth" href='#'><h1 className="scroll-smooth font-thin text-xs mb-0">powered by</h1></a> 
        <img className="rounded w-10 px-2" src={logo}/>
        </div>
       
    </div>
    </div>
  )
}

export default Contact