"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PartnerProgram from "@/components/JoinPartnerProgram";

const slides = [
  {
    year: "2024",
    image:
      "https://img.freepik.com/free-vector/freedom-thought-concept-illustration_114360-15761.jpg",
    title: "Conceptualization",
    subtitle: "The Birth of an Idea",
    description:
      "In 2024, we envisioned a platform that redefines urban mobility through sustainable e-vehicle rides. Our focus was to create an intuitive, eco-friendly ride-booking experience, emphasizing user convenience, safety, and environmental responsibility. This foundational idea set the tone for everything that followed.",
  },
  {
    year: "2025",
    image: "https://images.indianexpress.com/2023/02/bike-taxis.jpeg",
    title: "Platform Launch",
    subtitle: "Revolutionizing E-Rides",
    description:
      "In 2025, we launched our platform, aiming to transform urban transportation. By prioritizing sustainability and efficiency, we set the foundation for a cleaner future. Our platform empowers riders to make eco-conscious choices while enjoying seamless, reliable, and affordable rides.",
  },
  {
    year: "2026",
    image:
      "https://b2481894.smushcdn.com/2481894/wp-content/uploads/2021/09/Pied.png?lossy=1&strip=1&webp=1",
    title: "Making an Impact",
    subtitle: "Driving Change Together",
    description:
      "In 2026, we foresee our community making a tangible impact by significantly reducing carbon emissions and promoting eco-conscious commuting. Users will become ambassadors of green living, inspiring others to embrace sustainable transportation. Together, we aim to transform our cities into cleaner, healthier spaces, fostering a culture of environmental stewardship and collective responsibility.",
  },
  {
    year: "2027",
    image:
      "https://img.freepik.com/free-vector/business-concept-vector-illustration-businessman-who-running-with-increase-graphic-chart-see-imagination-future_1150-39743.jpg",
    title: "Future Expansion",
    subtitle: "Global Reach, Local Impact",
    description:
      "By 2027, our vision extends beyond cities, connecting communities worldwide through sustainable mobility. Together with our users, we aim to set a global standard for eco-friendly transportation, reducing the carbon footprint on a massive scale. Our platform will not only revolutionize transportation but also inspire a global movement towards a greener, more sustainable future.",
  },
];

const OurVision = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <Navbar isDarkMode={undefined} />

      <section  className="about-section bg-white py-28 min-h-96"
        style={{
          backgroundImage:
            'url(https://www.yelowsoft.com/static/10b4bb503d60e9c17ccef7291645b65f/5b05d/bg-gradiant-line-pattern.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      <div className="text-center">  <motion.p 
          className="text-xl font-bold uppercase bg-black text-white inline-block px-6 py-2 mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          About Us
        </motion.p></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 relative">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/01/UBERIM_Rider_5.1_UAE_17_0272-RT_airport.jpg" 
                  alt="Warehouse" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://www.yelowsoft.com/static/73bd21b69e77d6feebd8421c57896127/da9e3/why-yelowtaxi-center-img.webp" 
                  alt="Industrial Plant" 
                  className="absolute bottom-[-100px] left-[-100px] w-1/3 rounded-lg bg-transparent -rotate-12"
                />
              </motion.div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="mb-8">
                  <span className="text-green-600 text-lg font-semibold">About Our Platform</span>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight mt-4 ">
                    Leading the Way in Eco-Friendly <br /> E-Vehicle Ride Booking Since 2022
                  </h2>
                  <div className="w-14 h-1 bg-gray-300 mt-4 mx-auto"></div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Our platform revolutionizes urban mobility by offering sustainable, eco-friendly ride booking solutions. With a fleet of electric vehicles, we are committed to reducing carbon footprints while providing efficient, reliable, and affordable transportation options.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-900">
                    <span className="text-green-600 mr-2">✔</span>
                    100% Electric Vehicle Fleet
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="text-green-600 mr-2">✔</span>
                    Sustainable and Eco-Friendly Rides
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="text-green-600 mr-2">✔</span>
                    Affordable and Efficient Transportation
                  </li>
                </ul>
                <a href="#" className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}

      <section className="bg-gray-100 min-h-full pt-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            >
            Our <span className="font-bold text-lightGreen">Vision</span>
            <p className="text-xl text-gray-400 italic">"Our vision is to make travelling experience greener, clearner and easier."</p>
          </motion.h3>

          <div className="relative">
            <div className="flex flex-col items-center">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden ${
                    index === activeIndex ? "block" : "hidden"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-72 sm:h-80 lg:h-[500px] object-fill"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 sm:p-8 text-left">
                    <motion.p
                      className="text-sm uppercase bg-red-600 text-white inline-block px-4 py-1 mb-4 rounded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.h2
                      className="text-2xl sm:text-3xl font-light mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    >
                      {slide.title}
                    </motion.h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8 relative">
              <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
              {slides.map((slide, index) => (
                <div key={index} className="relative z-10">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 sm:px-6 py-2 mx-2 sm:mx-4 font-bold text-sm sm:text-base ${
                      index === activeIndex
                        ? "text-red-600 bg-white shadow-lg"
                        : "text-gray-900"
                    } relative rounded-full`}
                  >
                    {slide.year}
                    <span
                      className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${
                        index === activeIndex ? "bg-red-600" : "bg-black"
                      }`}
                    ></span>
                    {index === activeIndex && (
                      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 border border-red-600 rounded-full"></span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PartnerProgram />
      <Footer />
    </>
  );
};

export default OurVision;
