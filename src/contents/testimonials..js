import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {

    const testimonials = [
        {
            image: 'nati.jpg',
            text: '“Dedicated and curious—never shies away from challenges. A rising star in the tech world!”',
            name: 'Natinael H/Mariam'
        },
        {
            image: 'bura.jpg',
            text: '“Always hungry to learn and quick to grasp new concepts. A valuable asset to any team!”',
            name: 'Buruk Jeldu'
        },
        {
            image: 'niko.jpg',
            text: '“Eager to learn, adaptable, and passionate about coding. A junior developer to watch!”',
            name: 'Nikodimos Jemaneh'
        }
    ];


    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.2, // Defines how much of the element is visible before triggering
    });

    return (
        <motion.div id='testimonial'
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className='bg-gray-900 h-auto mt-10'>
            <h1 className='text-gray-800 text-center bg-primary p-2 mb-5 text-5xl font-bold '>Testimonials</h1>

            <div className='md:flex md:justify-between md:px-20 md:py-10 md:gap-8  p-4'>


                {testimonials.map((testimonial) => {
                    return <div className=' text-white md:mb-0 md:text-left  mb-5 text-center'>
                        <img src={testimonial.image} className='w-32 rounded-lg mx-auto md:mx-0' />
                        <h1 className='text-lg mb-2'>{testimonial.text}</h1>
                        <h2 className='text-lg font-semibold'>{testimonial.name}</h2>
                        <h1 className='text-sm'>Software Developer</h1>
                        <div className='flex gap-2 md:justify-start  justify-center items-center'>
                            <img src='linkedin-svgrepo-com.svg' className='w-8 h-8' />
                            <img src='github-142-svgrepo-comwhite.svg' className='w-6 h-6' />
                        </div>
                    </div>
                })}

            </div>

        </motion.div>

    );
};



export default Testimonials;

