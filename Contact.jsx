import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";


const Contact = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div id="contact">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className='text-4xl font-bold underline text-white'>Let's Discuss our <span className='text-purple-500'>Projects</span></motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className='text-slate-400 mt-4'>lets make something new,different and more meaning full.</motion.p>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaPhone className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>call me</p>
                            <p className='text-white'>+91 9894575594</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaEnvelope className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>E-mail</p>
                            <p className='text-white'>vkanishka192004@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.2 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaMapMarkerAlt className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>Address</p>
                            <p className='text-white'> Madurai,Coimbatore, TamilNadu</p>
                        </div>
                    </motion.div>
                </div>

                <motion.form
                    ref={ref}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className='space-y-4 text-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input type="text" placeholder='Full Name' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
                        <input type="email" placeholder='Your email' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input type="text" placeholder='Phone no' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
                        <input type="email" placeholder='Project / company' className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
                    </div>
                    <textarea placeholder="Job Description" className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type='submit' className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200'>Submit Message</motion.button>
                </motion.form>
            </div>
            {/*footer*/}
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
                className='mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
                <p>&copy; 2024, All rights reserved</p>
                <p>Kani Vijay</p>
                <div className='flex justify-center space-x-4 text-white mt-4'>
                    <a href="https://www.facebook.com/profile.php?id=61565857986744&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-500">
                        <FaFacebook className="w-6 h-6" /></a>
                    <a href="https://www.instagram.com/kxnishzx_04?igsh=MTk5aTF4dzQwNWF5OA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-purple-500">
                        <FaInstagram className="w-6 h-6" /></a>
                    <a href="https://www.linkedin.com/in/kanishka-v-13976024a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-500">
                        <FaLinkedin className="w-6 h-6" /> </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact