import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {


    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.3, // Defines how much of the element is visible before triggering
    });


    return (
        
        <div className=" flex justify-center items-center gap-10">
          
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
                <p className="text-gray-600 mb-4">
                    Founded by XYZ, our restaurant is dedicated to providing exceptional dining experiences with top-quality food
                    and outstanding customer service. Our innovative approach to restauranting blends traditional culinary
                    expertise with modern trends, ensuring a memorable experience for all our guests.
                </p>
                <p className="text-gray-600 mb-4">
                    At our restaurant, we believe in the power of great food to bring people together. We take pride in sourcing
                    the freshest ingredients, creating unique dishes that delight the senses, and offering a welcoming atmosphere
                    where everyone feels at home.
                </p>
                <p className="text-gray-600 mb-4">
                    Whether you're joining us for a casual meal with friends, a special celebration, or a business lunch, we are
                    committed to making your visit exceptional. Discover our seasonal menus, enjoy our special dishes, and
                    experience the best in dining with us.
                </p>
                <div className="mt-6">
                    <a href="#contact" className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
          
            <div className="">
                <motion.img
                     ref={ref}
                     animate={{ x: inView ? 0 : 30 }}
                     transition={{ duration: 1 }}
                    src="owner.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

           

            </div>
            


    );
};

export default AboutUs;
