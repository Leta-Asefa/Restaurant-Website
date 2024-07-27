import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const Chefs = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.3, // Defines how much of the element is visible before triggering
    });

    return ( 
        <div className="p-2" >
            
            <h1 className="text-center font-bold text-4xl">Our Chefs</h1>
            <motion.img
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2 }}
                src="chefs.webp"
                className="mx-auto"
            />
            <p className="text-center">Our restaurant boasts a team of renowned chefs with extensive experience, dedicated to crafting exceptional dishes. Their expertise ensures every meal is prepared to meet and exceed your expectations. Whether you have specific preferences or dietary needs, our chefs are committed to delivering a memorable dining experience that caters to your tastes and satisfaction.</p>
        </div>
     );
}
 
export default Chefs;