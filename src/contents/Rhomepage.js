import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } }
}

const HomePage = () => {

    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto text-center  h-screen text-white font-sans relative z-50  mt-12 p-2 pl-10 "
        >

            <div className='space-y-2' style={{height:"80%"}}>
                <p className=" md:text-8xl text-3xl  font-bold ">ABC <br>
                </br> <span className='hidden md:inline'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span> Food <span className="text-red-50">&</span> Restaurant</p>
                <div>
                    <p className=" text-lg font-semibold ">Delicious Moments, Memorable Tastes</p>
                    <div className=' md:text-3xl text-lg font-semibold'>We Offer
                        <Typewriter
                            words={["  Delicious Specialty Dishes ", " Fresh, Local Ingredients", " Memorable Dining Experiences", " Seasonal And Unique Menus"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <div className='text-sm mt-4 md:px-40 px-1 ' >
                    Welcome to ABC Restaurant, where exceptional quality meets unparalleled customer service. Our innovative approach to dining redefines the restaurant experience, offering a blend of fresh, expertly crafted dishes and attentive service. Discover a new standard of culinary excellence and hospitality that sets us apart, ensuring every visit is a memorable delight.
                    </div>

                    <div   className='flex justify-center gap-5 p-2 rounded-lg '>
                   <a href='https://github.com/Leta-Asefa'><img src='youtube.svg' className='w-8 h-8 hover:scale-110 ' /></a> 
                   <a href='https://www.linkedin.com/in/leta-asefa/'><img src='linkedin-svgrepo-com.svg' className='w-9 h-9 hover:scale-110' /></a>
                   <a href='https://t.me/letaasefa'><img src='telegram-svgrepo-com.svg' className='w-9 h-9 hover:scale-110' /></a>
                   <a href='mailto:letaassefa7@gmail.com'><img src='gmail-svgrepo-com.svg' className='w-8 h-8 hover:scale-110' /></a>
                   <a href=''><img src='tiktok.svg' className='w-8 h-8 hover:scale-110' /></a>
                    </div>
                    
                </div>

            </div>

            
            <div className='absolute bottom-52 md:bottom-40 right-10 flex justify-center gap-2 items-center'> 
                <img src='deliveryman.svg' className='md:w-20 md:h-20 w-10 h-10' />
                <p className='text-center md:text-3xl text-xl font-bold text-red-500'>
                    <h1>Delivery</h1>
                    <h1 className='flex items-center'><img src='phone.svg' className='md:w-8 md:h-8 w-5 h-5'/>    9095</h1>
                </p>
            </div>


        </motion.div>
    );
}

export default HomePage;