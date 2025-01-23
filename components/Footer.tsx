import React from "react";

export default function Footer() {
  return (
    <footer className="bg-darkBG text-gray-400">
      {/* Get in Touch Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-white font-bold text-4xl mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have questions? We’re here to help and would love to hear from you.
          </p>
          <div className="space-y-6 text-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <i className="fas fa-phone-alt"></i> {/* Font Awesome Icon */}
              </div>
              <div>
                <h4 className="text-white">Phone Support</h4>
                <p className="text-sm">Available 24/7 for urgent matters</p>
                <a
                  href="tel:+1234567890"
                  className="text-green-500 text-sm hover:underline"
                >
                  +123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-white ">Email</h4>
                <p className="text-sm">We’ll respond within 24 hours</p>
                <a
                  href="mailto:support@macrorides.com"
                  className="text-green-500 text-sm hover:underline"
                >
                  support@macrorides.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-white">Office</h4>
                <p className="text-sm">
                  123 Green Street, Eco City
                  <br />
                  Open Mon-Fri, 9AM-6PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border px-5 py-10 rounded-lg bg-darkBG">
          <h2 className="text-white font-bold text-3xl mb-4">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 text-sm bg-lightBG text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 text-sm bg-lightBG text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm bg-lightBG text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              className="w-full px-4 py-2 text-sm bg-lightBG text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
            <textarea
              placeholder="Message" rows='4'
              className="w-full px-4 py-2 text-sm bg-lightBG text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* MacroRides Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">MacroRides</h3>
          <p className="text-sm mb-6">
            Sustainable transportation solutions for a greener future. Serving
            local communities with eco-friendly rides and deliveries.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-green-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-r-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Legal Section */}
      <div className="border-t border-gray-700"></div>
      <div className="text-gray-500 text-sm max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 MacroRides. All rights reserved.</p>
        <div className="space-x-6">
          <a href="#" className="hover:text-green-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-green-500">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
