import React from 'react'
import aboutImg from "../assets/thouf-dp.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div id="about" className='text-white py-16'>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>
                    About Me</motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-300 text-center'>Its Time To Know About Me. <br />Myself kanishka, Currently in my final year of BE CSE, I’m also working as a MERN stack Developer Intern.
                </motion.p>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:0 md:mr-8 flex justify-center'>
                        <img
                            src={aboutImg}
                            className='width-2/3 sm:w-1/2 md:w-8/12'
                        />
                    </motion.div>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='text-gray-300 px-7 md:px-0 text-base sm:text-lg md:text-xl'>
                        Hey there! I'm a software engineer with a passion for building scalable and efficient systems.
                        I'm currently doing my internship on MERN stack development!!!. <br /><br />
                        🔍 What I Know: <br />
                        ✔ Frontend: React.js, Tailwind CSS <br />
                        ✔ Backend: Node.js, Express.js <br />
                        ✔ Database: MongoDB, MySQL  <br />
                        ✔ Other Skills: API development, Git/GitHub, Cloud Deployment
                    </motion.p>
                </div>
                <div className='flex flex-col sm:flex-row justify-around items-center mt-12space-y-6 sm:space-y-0'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        className='text-center'>
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>0+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.7, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>Years of Experience</motion.p>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.4, duration: 0.5 }}
                    >
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>3+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>Technical Education, Self-Learning</motion.p>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.6, duration: 0.3 }}
                    >
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.9, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>Projects I Have Made</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
