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
                <div className="navbar-brand">
                    <img src="logo.svg" className='w-10 h-10' />
                    <p > <span className='text-4xl'>T</span>rendyTech</p>
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

                    <a href="#skill" className="navbar-link">
                        <img src='skills.svg' className='navbar-links-img' />
                        <h1>Skills</h1>
                    </a>
                    <a href="#project" className="navbar-link">
                        <img src='projects.svg' className='navbar-links-img' />
                        <h1>Projects</h1>
                    </a>
                    <a href="#experience" className="navbar-link">
                        <img src='experiences.svg' className='navbar-links-img' />
                        <h1>Experiences</h1>
                    </a>
                    <a href="#education" className="navbar-link">
                        <img src='education.svg' className='navbar-links-img' />
                        <h1>Education</h1>
                    </a>
                    <a href="#testimonial" className="navbar-link">
                        <img src='testimonials.svg' className='navbar-links-img' />
                        <h1>Testimonials</h1>
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
