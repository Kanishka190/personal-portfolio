import React from 'react'
import avatar from "../assets/brain_1-removebg.png"
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className='text-white py-10'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5
                }}
                src={avatar} className='mx-auto w-2/3 md:1/3 lg:w-1/4' />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5
                }}
                className='container mx-auto text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>
                    My story
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className='text-purple-500'>My personal portfolio</motion.span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className='text-gray-400 text-lg mb-8'>showcase my journey
                </motion.p>

                <div className='flex justify-center space-x-4 mb-10'>
                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className='bg-purple-500 text-white px-6 py-3 rounded-full'>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >Hire me</Link>

                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className='text-white border border-white px-6 py-3 rounded-full'>
                         <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >My Story</Link>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero