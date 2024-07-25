import React from 'react';
import { motion } from 'framer-motion';
const buttonVariants = {
    hover: {
        scale: 1.3,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
};

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2 className="cta-heading">Let's Connect!</h2>
                <p className="cta-text">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="cta-buttons">
                    <a
                        href="#contact"
                        className="cta-button"
                    >
                        Contact Me
                    </a>
                    <a
                        href="resume.pdf"
                        className="cta-button"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
