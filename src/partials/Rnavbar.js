import React, { useState } from 'react';
import { motion } from 'framer-motion'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <motion.nav
            className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0, type: "spring", stiffness: 30 }}
        >


            <div className="container mx-auto flex justify-between items-center">


                <div className="navbar-brand font-handwriting2">
                    <img src="logo.svg" className='w-14 h-12 mr-5' />
                    <p  >ABC Restaurant</p>
                </div>

                <div className={`md:hidden ${isOpen ? 'hidden' : 'visible'}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src="menu.svg" className="w-8 h-8" alt="Menu" />
                </div>



                <div className={`navbar-links ${isOpen ? 'block' : 'hidden'} md:flex`}>

                    <div className="md:hidden flex justify-end" onClick={() => setIsOpen(!isOpen)}>
                        <img src="close.svg" className="w-5 h-5" alt="Menu" />
                    </div>

                    <a href="#homepage" className="navbar-link">
                        <img src='home.svg' className='navbar-links-img' />
                        <h1>Home</h1>
                    </a>

                    <a href="#services" className="navbar-link">
                        <img src='services.svg' className='w-7 h-7' />
                        <h1>Services</h1>
                    </a>
                    <a href="#menu" className="navbar-link">
                        <img src='foodMenu.svg' className='navbar-links-img' />
                        <h1>Menu</h1>
                    </a>
                    <a href="#special" className="navbar-link">
                        <img src='special.svg' className='navbar-links-img' />
                        <h1>Specials</h1>
                    </a>
                    <a href="#chef" className="navbar-link">
                        <img src='specials.svg' className='navbar-links-img' />
                        <h1>Chefs</h1>
                    </a>
                   
                    <a href="#About" className="navbar-link">
                        <img src='about.svg' className='navbar-links-img w-10 h-10' />
                        <h1>About</h1>
                    </a>

                    <a href="#contact" className="navbar-link">
                        <img src='contact.svg' className='navbar-links-img' />
                        <h1>Contact</h1>
                    </a>
                </div>



            </div>



        </motion.nav>
    );
}

export default Navbar;
