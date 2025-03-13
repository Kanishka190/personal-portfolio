import React from 'react';
import { motion } from "motion/react";

const Companies = () => {

    const companies = [
        { name: "Amizhth Techno Solution (July 2024 - Sep 2024)", description: "Internship focused on web development, utilizing modern frameworks and best practices." },
        { name: "Nucaza Innovations Pvt Ltd (Nov 2024 - present)", description: "Worked on cutting-edge MERN stack projects, integrating AI-driven solutions to enhance user experience and system efficiency." }
    ];
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            id="companies"
            className="py-16 text-white"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl underline font-bold mb-8">
                    Companies I Done Interned With
                </h2>
                <ul className="max-w-2xl mx-auto text-left space-y-6  hover: shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
                    {companies.map((company, index) => (
                        <li key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-purple-500">{company.name}</h3>
                            <p className="text-gray-300">{company.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default Companies;
