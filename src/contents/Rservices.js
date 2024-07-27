import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Services = () => {

    const services = [
        {
            header: "Spontaneous Dining",
            description: "Enjoy the freedom of dining out whenever the mood strikes with our flexible seating options. No reservation needed—just walk in and savor a delightful meal with us, anytime.",
            image: "injerafood.webp"
        },
        {
            header: "Catering",
            description: "Elevate your events with our premium catering services. From intimate gatherings to grand celebrations, we provide exquisite dishes and exceptional service to make your occasion memorable",
            image: "catering.jpg"
        },
        {
            header: "Private Dining Rooms",
            description: "Enjoy a personalized dining experience in one of our elegant private dining rooms. Perfect for business meetings, family celebrations, or romantic dinners, complete with tailored menus and dedicated service.",
            image: "privateroom.jpg"
        },
        {
            header: "Takeout and Delivery",
            description: "Savor our delectable dishes from the comfort of your home with our convenient takeout and delivery options. Fresh, hot meals delivered right to your doorstep.",
            image: "delivery.png"
        },
        {
            header: "Seasonal Menus",
            description: "Experience the flavors of each season with our rotating seasonal menus, designed to highlight the best ingredients and culinary trends of the moment.",
            image: "specialmenu.webp"
        },
        {
            header: "Event and Entertainment",
            description: "Join us for exciting events and entertainment, including live music, trivia nights, themed dinners, and cooking classes, ensuring a memorable dining experience for all.",
            image: "event.jpg"
        }






    ]

    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.2, // Defines how much of the element is visible before triggering
    });

    return (
        <motion.div
            ref={ref}
            animate={{ y: inView ? 0 : -70 }}
            transition={{ duration: 1 }}
            className="relative"
        >

            <h1 className="text-center md:text-5xl text-4xl font-bold">Services</h1>
            <h1 className=" text-sm text-center mx-auto w-70 md:w-53 md:px-2 p-3" > We are excited to present the following services to enhance your dining experience and ensure your satisfaction. Explore our offerings designed to meet your needs and exceed your expectations. </h1>



            <dvi className="grid grid-cols-1 md:grid-cols-3 md:px-40 px-4 py-10 gap-10">

                {
                    services.map(service => {
                        return <div className="border-white border-2 hover:border-black hover:rounded-md p-1">
                            <img src={service.image} className="w-full h-52 object-cover rounded-lg" />
                            <h1 className="font-bold text-2xl">{service.header}</h1>
                            <p className='text-sm'>{service.description}</p>
                        </div>
                    })
                }


            </dvi>


        </motion.div>

    );
}

export default Services;