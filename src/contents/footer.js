import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 md:px-40 px-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between ">
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2"> Customer Support</h2>
                    <p className="text-sm">Contact Us</p>
                    <p className="text-sm">FAQs</p>
                    <p className="text-sm">Live Chat</p>
                    <p className="text-sm">Help Center</p>
                    
                </div>

                <div className="mb-4 ">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul>
                        <li><a href="/home" className="text-sm hover:underline">Home</a></li>
                        <li><a href="/services" className="text-sm hover:underline">Services</a></li>
                        <li><a href="/menu" className="text-sm hover:underline">Menu</a></li>
                        <li><a href="/special" className="text-sm hover:underline">Special Dishes</a></li>
                        <li><a href="/gallery" className="text-sm hover:underline">Gallery</a></li>
                        <li><a href="/chef" className="text-sm hover:underline">Chefs</a></li>
                        <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
                        <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex flex-col text-green-500">
                        <br></br>
                        <a href="https://www.facebook.com" className="text-sm hover:text-gray-400" aria-label="Facebook">
                            <i className="fab fa-facebook-f mr-3"></i> https://www.facebook.com
                        </a>
                        <a href="https://www.twitter.com" className="text-sm hover:text-gray-400" aria-label="Twitter">
                            <i className="fab fa-twitter mr-3"></i>https://www.twitter.com
                        </a>
                        <a href="https://www.instagram.com" className="text-sm hover:text-gray-400" aria-label="Instagram">
                            <i className="fab fa-instagram mr-3"></i> https://www.instagram.com
                        </a>
                        <a href="https://www.linkedin.com" className="text-sm hover:text-gray-400" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in mr-3"></i> https://www.linkedin.com
                        </a>
                        <a href="https://www.linkedin.com" className="text-sm hover:text-gray-400" aria-label="LinkedIn">
                            <i className="fab fa-tiktok mr-3"></i> https://www.tiktok.com
                        </a>
                        <a href="https://www.linkedin.com" className="text-sm hover:text-gray-400" aria-label="LinkedIn">
                            <i className="fab fa-youtube mr-3"></i>https://www.youtube.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Restaurant Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
