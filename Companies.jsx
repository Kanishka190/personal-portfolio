import React from 'react'
import {animate, motion} from "motion/react"

const Companies = () => {

    const companies =[
        "Zoho",
        "LinkedIn",
        "Accenture",
    ];

    const companiesList =[...companies,...companies];

    const scrollVarient1 = {
        animate: {
            x:[0, -2000],
            transition:{
                x:{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 19,
                    ease:"linear"
                },
            },
        },
    };

    const scrollVarient2 = {
        animate: {
            x:[-2000, 0],
            transition:{
                x:{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 19,
                    ease:"linear"
                },
            },
        },
    };
  return (
    <div className='text-white py-16'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies i have inspired by</h2>
            <div className='overflow-hidden relative w-full'>
                <motion.div 
                variants={scrollVarient1}
                animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                    {companiesList.map((company , index)=>
                    <div className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                    key={index}>{company}
                    </div>
                    )}
                </motion.div>
            </div>
            <div className='overflow-hidden relative w-full mt-5'>
                <motion.div 
                 variants={scrollVarient2}
                animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                {companiesList.map((company , index)=>
                    <div
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                    key={index}>{company}
                    </div>
                    )}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Companies