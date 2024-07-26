import React from 'react';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here, e.g., sending data to an API
    const formData = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    // You can replace this with actual email sending logic
  };

  return (
    <div className="bg-gray-100 py-20 px-14 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Contacts</h3>
          <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-600 mb-2">Email: info@restaurant.com</p>
          <p className="text-gray-600 mb-4">Address: 123 Main Street, Anytown, USA</p>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861256832376!2d144.9559253153171!3d-37.81720997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770b3f2cb26a0!2sRestaurant!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Connect With Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
