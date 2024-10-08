/* import { PROJECTS } from "../constants"
import {motion} from "framer-motion"
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">Project</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                      whileInView={{opacity:1,x:0}}
                      initial={{opacity:0,x:-100}}
                      transition={{duration:1}}
                      viewport={{once:true}}
                    className="w-full lg:w-2/4">
                    <a href={project.link} target="_blank" rel="Issue Track">
            <img
            
              className="rounded  transition-transform duration-500 transform hover:scale-110 mb-4"
              src={project.image}
              width={400}
              height={200}
              alt={project.title}
              
            />
          </a>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                    className="w-full max-w-xl lg:w-2/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-200  font-thin">{project.description}</p>
                        <h6 className="mb-2 text-neutral-250">Technology used</h6>
                        {project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 mt-2 rounded  flex-wrap bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
                            {tech}</span>
                    ))}
                       
                    </motion.div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Project */

import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/4 flex justify-center mb-4 lg:mb-0"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded transition-transform duration-500 transform hover:scale-110"
                  src={project.image}
                  width={400}
                  height={200}
                  alt={project.title}
                />
              </a>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/4 flex flex-col text-left md:justify-center md:items-center lg:items-start md:text-center lg:text-left"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-200 font-thin">{project.description}</p>
              <h6 className="mb-2 text-neutral-250">Technology used</h6>
              <div className="flex flex-wrap md:justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1  text-sm font-medium text-purple-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
