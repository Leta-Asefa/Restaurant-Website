import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experiences = () => {
    const jobs = [
        { id: 1, company: 'Shalom Reflexology', position: 'Software Developer', startDate: 'Oct 25, 2022', endDate: 'Apr 23, 2022 G.C', image: "shalomlogo.jpg" },
        { id: 2, company: 'Amon ICT Solution', position: 'Backend Developer', startDate: 'Nov 27, 2023', endDate: 'Jan 26, 2023 G.C', image: "amon.png" },
        { id: 3, company: 'OasisInfobyte', position: 'Java Developer', startDate: 'Sep 21, 2023', endDate: 'Oct 21, 2023 G.C', image: "oasis.jpg" }
    ];


    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.3, // Defines how much of the element is visible before triggering
    });


    return (
        <motion.div ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            id='experience'
            className="md:flex md:items-center md:justify-between flex-col md:flex-row mt-6 md:p-20 bg-gray-50">
            

            <h1 className='flex-1 text-center text-5xl font-bold text-gray-800  self-baseline'><h1 className='bg-primary p-2 text-3xl rounded-md'>EXPERIENCES</h1><br></br><br></br>
                <p className='text-sm font-semibold'>I have worked in these companies either as an employee or an intern.</p>
                <img src='work.png' className='mx-auto rounded-lg w-40' />
            </h1>
            

            {jobs.map((job, index) => (
                <div key={index} className="flex items-center">

                    <div className="md:ml-4 p-4">
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-lg font-bold text-gray-600 ">{job.company}</p>
                        <p className="text-sm text-gray-600">{job.position}</p>
                        <p className="text-sm text-gray-700">{job.startDate} - {job.endDate}</p>
                        <img src={job.image} className='mx-auto md:mx-0 md:w-40 w-96 rounded-lg mt-3' />
                    </div>
                </div>
            ))}

           

        </motion.div>
    );
};
export default Experiences;
