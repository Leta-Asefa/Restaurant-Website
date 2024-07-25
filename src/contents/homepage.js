import { Typewriter } from 'react-simple-typewriter';
import {  motion } from 'framer-motion'


const HomePag = () => {

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 4 } }
    }
    const image = {
        hidden: { y: "-100vh" },
        visible: { y: 0, transition: { duration: 2 } }
    }
    const intro1 = {
        hidden: { y: "-100vh",x:1280 },
        visible:{y:0,x:0, transition:{duration:1,delay:0}},
    }
    const intro2 = {
        hidden: { x: "-100vw" },
        visible:{x:0, transition:{duration:1,delay:0.2}},
    }
    const intro3 = {
        hidden: { x: "-100vw" },
        visible:{x:0, transition:{duration:1,delay:0.4}},
    }
    const intro4 = {
        hidden: { x: "-100vw" },
        visible:{x:0, transition:{duration:1,delay:0.6}},
    }
    const intro5 = {
        hidden: { x: "-100vw" },
        visible:{x:0, transition:{duration:1,delay:0.8}},
    }
    const backgroundImage= {
        hidden: {opacity:0 },
        visible:{opacity:1, transition:{duration:1.5,delay:0.8}},
    }

    

    return (
        <motion.div
            id='homepage'
            className="homepage"
            variants={container}
            initial="hidden"
            animate="visible"
        >

            <motion.div className="homepage-left"  >
                <motion.div  variants={intro1}><img src='welcome.svg' className='w-14 h-14 md:w-28 md:h-28' /> </motion.div>
                <motion.div variants={intro2} className='text-4xl md:text-8xl font-extrabold mb-6' >Leta Asefa</motion.div>
                <motion.div  variants={intro3}  className='text-2xl md:text-4xl mb-6' >
                    I'm a
                    <Typewriter
                        words={[" Software Developer", " Graphic Designer", " Content Creator",]}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </motion.div>
                <motion.p  variants={intro4}  className='text-lg mb-3'> Discover my diverse portfolio! With a wealth of personal projects and internship programs under my belt, I've gathered extensive experience in software development. I assure you that my skills are guaranteed to meet your satisfaction.
                </motion.p>
                <motion.div  variants={intro5}  className='flex justify-between bg-blue-50 p-2 rounded-lg'>
                   <a href='https://github.com/Leta-Asefa'><img src='github-142-svgrepo-com.svg' className='w-8 h-8' /></a> 
                   <a href='https://www.linkedin.com/in/leta-asefa/'><img src='linkedin-svgrepo-com.svg' className='w-8 h-8' /></a>
                   <a href='https://t.me/letaasefa'><img src='telegram-svgrepo-com.svg' className='w-8 h-8' /></a>
                   <a href='mailto:letaassefa7@gmail.com'><img src='gmail-svgrepo-com.svg' className='w-8 h-8' /></a>
                   <a href=''><img src='tiktok.svg' className='w-8 h-8' /></a>
                </motion.div>
            </motion.div>

            <motion.div className="homepage-right">

                <motion.img variants={backgroundImage} src='OpO5.gif' className='mx-auto transofrm   opacity-100 ' />

                <motion.div className='absolute top-0 left-0 mx-auto w-full'>

                    <motion.img src='profilepic.svg' className='mx-auto w-80 z-20  rounded-full' variants={image} />

                    <h1 className='text-center font-extrabold text-lg p-1 bg-orange-200 rounded-lg' >
                        " Make every detail perfect and limit the number of details to perfect "
                    </h1>
                    <h1 className='text-center'>Jack Dorsey</h1>
                </motion.div>
            </motion.div>

        </motion.div>
    );
}

export default HomePag;