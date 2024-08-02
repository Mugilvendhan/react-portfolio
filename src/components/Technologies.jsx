import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { motion} from "framer-motion";
import { FaFigma } from "react-icons/fa";



const iconVariants = (duration)=>({
    initial:{y:10},
    animate:{
        y:[8,-8],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      /* viewport={{ once: true }}  */
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      viewport={{ once: true }} 
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <IoLogoJavascript className="text-5xl mb-1 text-yellow-400" />
          <span className="text-xs text-yellow-400">JavaScript</span>
        </motion.div>

        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <FaFigma className="text-5xl mb-1 text-gray-100" />
          <span className="text-xs text-gray-100">Figma</span>
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <RiReactjsLine className="text-5xl mb-1 text-cyan-400" />
          <span className="text-xs text-cyan-400">React.js</span>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <SiRedux className="text-5xl mb-1 text-purple-500" />
          <span className="text-xs text-purple-500">Redux</span>
        </motion.div>

        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <RiTailwindCssFill className="text-5xl mb-1 text-cyan-400" />
          <span className="text-xs text-cyan-400">Tailwind</span>
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <FaJava className="text-5xl mb-1 text-red-500" />
          <span className="text-xs text-red-500">Java</span>
        </motion.div>

       

        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl shadow-sm hover:shadow-gray-700 border-4 border-neutral-800 p-4 w-24 h-24 flex flex-col items-center justify-center">
          <SiSolidity className="text-5xl mb-1 text-gray-500" />
          <span className="text-xs text-gray-500">Solidity</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;