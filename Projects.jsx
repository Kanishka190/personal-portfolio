import React from 'react'
import project1 from "../assets/project1.jpeg"
import project3 from "../assets/project3.jpg"
import project2 from "../assets/Meditate.png"
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "My personal portfolio using VITE + REACT ",
            image: project1,
            link: "https://github.com/Kanishka190/responsive-portfolio"
        },
        {
            id: 2,
            title: "Mind Mend App (figma)",
            description: "Complete meditation / mind relaxation app designed using figma",
            image: project2,
            link: "https://www.figma.com/design/UHaI72TEfJSYhkkSfaiz2A/K2D?node-id=0-1&p=f&t=0Qgvko9i2VJOQ4Qb-0"
        },
        {
            id: 3,
            title: "Air Pollution Analysis",
            description: "Real-time AQI tracking, historical data visualization, predictive analysis, and location-based pollution insights.",
            image: project3,
            link: "https://github.com/Kanishka190/Air-Pollution-analysis"
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="projects" className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'
                >
                    My Projects
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'
                >
                    Showcase of the projects I have created
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: project.id * 0.2, duration: 0.5 }}
                            className='bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'
                            key={project.id}
                        >
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
                            <div className='p-6'>
                                <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                                <p className='text-slate-400 mb-4'>{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition inline-block'
                                >
                                    Details
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
