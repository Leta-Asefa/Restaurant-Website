import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const CallUsNow = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 1, // Defines how much of the element is visible before triggering
    });




    return (
        <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0 }} // Slide in when in view
        transition={{ duration: 3 }}
            className=" text-red-600 bg-white rounded-lg text-center shadow-md flex justify-center items-center sticky top-14 left-0">

            <img src="callus.webp" className="w-14" />

            <div>
                <p className=" font-bold">Call us now and order</p>
                <p className="text-lg ">+251 912345678</p>
            </div>
        </motion.div>


    );
}

export default CallUsNow;