import React from 'react'
import { FaAppStore } from 'react-icons/fa'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'

const Services = () => {

    const servicesData = [
        {
            title: "1️⃣ Frontend Development",
            description:
                " Crafting visually appealing, responsive, and interactive web applications using React.js, Next.js, and Tailwind CSS. I focus on modern UI/UX to enhance user experience."
        },
        {
            title: "2️⃣ Fullstack Development",
            description:
                "Building scalable end-to-end web applications with MongoDB, Express.js, React.js, and Node.js (MERN). I integrate APIs, databases, and authentication for seamless performance. "
        },
        {
            title: "3️⃣ Custom Web Solutions",
            description:
                "Need a portfolio, business website, or web application? I design and develop customized web solutions that meet your requirements and provide a smooth digital experience."
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div id ="services" className='text-white py-16'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
                <p className='mb-12 text-gray-400 '>
                Let’s connect! Drop a message in the Hire Me section, and let's build something amazing together!
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((Service, index) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale:0.8 }}
                            animate={inView ? { opacity: 1, scale: 1} : {opacity: 0, scale:0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.2}}
                            key={index}
                            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover: shadow-lg hover:shadow-purple-500 transition-shadow duration-300 '
                        >
                            <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
                            <h3 className='text-lg sm:text-3xl lg:text-2xl font-semibold mb-2'>{Service.title}</h3>
                            <p className='text-sm,:text-base lg:text-lg text-gray-400'>{Service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Services