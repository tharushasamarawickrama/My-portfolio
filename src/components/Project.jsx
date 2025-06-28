import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">
            Projects
        </motion.h2>
        <div>{PROJECTS.map((project,index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="w-full lg:w-1/4 flex flex-col items-center">
                    <img 
                        src={project.image}
                        width={250}
                        height={250} 
                        alt={project.title} 
                        className="mb-6 rounded transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                    <div className="flex gap-2">
                      {typeof project.github === "object" ? (
                        <>
                          <a
                            href={project.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900 border border-purple-900 hover:bg-purple-900 hover:text-white transition"
                          >
                            FRONTEND
                          </a>
                          <a
                            href={project.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900 border border-purple-900 hover:bg-purple-900 hover:text-white transition"
                          >
                            BACKEND
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="me-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900 border border-purple-900 hover:bg-purple-900 hover:text-white transition"
                        >
                          GITHUB
                        </a>
                      )}
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((technology,index) => (
                        <span key={index} className="me-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                            {technology}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}</div>
    </div>
  )
}

export default Project