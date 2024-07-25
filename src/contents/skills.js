import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = () => {
    const skills = [
        { name: 'Javascript', value: 85 },
        { name: 'MongoDb', value: 70 },
        { name: 'Express', value: 80 },
        { name: 'ReactJs', value: 75 },
        { name: 'NodeJs', value: 80 },
        { name: 'HTML 5', value: 85 },
        { name: 'CSS 3', value: 70 },
        { name: 'Tailwindcss', value: 85 },
        { name: 'Java', value: 84 },
        { name: 'Springboot', value: 65 },
        { name: 'Junit', value: 90 },
        { name: 'MySQL', value: 80 },
        { name: 'Git', value: 80 },
        { name: 'Github', value: 80 },
        { name: 'Maven', value: 60 },
        { name: 'Vscode', value: 80 },
        { name: 'Eclipse', value: 80 },
        { name: 'Photoshop', value: 75 },
        { name: 'CapCut', value: 65 },
        { name: 'Design Theory', value: 100 }
    ]

    const image = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3, } }
    }

    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.4, // Defines how much of the element is visible before triggering
    });

    


    return (
        <motion.div id='skill' 
                                ref={ref}
                                animate={{ opacity: inView ? 1 : 0 }}
                                transition={{ duration: 1.3 }}
                                className='relative'
        >

            <div className='md:flex md:justify-between w-full items-center px-0 gap-5 bg-gray-900'>
                <p className='text-xl font-bold text-white bg-gray-900 p-4 md:pl-20 rounded-lg'>
                    I am highly confident in the technical skills listed below:
                    In addition to my technical expertise, I am also a strong communicator within team environments, ensuring effective collaboration and project success.

                </p>
                <motion.img src='skills.gif' className='md:w-32' variants={image} animate='visible' />
            </div>

            <div className="skill-bar-container">

                {skills.map((skill) => (
                    <div key={skill.name} className="skill-bar">
                        <div className="skill-bar-label">{skill.name}</div>
                        <div className="skill-bar-value-container">
                            <motion.div
                                className="skill-bar-value"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1 }}
                            ></motion.div>
                        </div>
                        <div className="skill-bar-value-text">{skill.value}%</div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillBar;

