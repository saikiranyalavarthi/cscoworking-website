import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import founderImg from "../assets/Founder.jpg"; // Adjust the path

const FounderSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-purple-100 via-blue-50 to-white py-16 px-6 lg:px-16">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
      >
        <div className="relative z-10 p-4 bg-white rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
          <img
            src={founderImg}
            alt="Gopal Das Agarwal"
            className="rounded-lg w-[300px] md:w-[400px] object-cover"
          />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-tr from-purple-400 to-blue-300 rounded-xl blur-xl opacity-50 animate-pulse z-0" />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 text-gray-800 space-y-6"
      >
        <h2 className="text-4xl font-bold text-blue-800">Founders & History</h2>
        <p>
          The company was founded by <strong>Gopal Das Agarwal</strong> and{" "}
          <strong>Anand Ramachandran</strong> in 2018 to meet the demands of the
          growing workplace population; albeit in a collaborative and affordable
          model. Our brand's logo, Co Working Spaces, cleverly combines the
          initials <strong>'C'</strong> for Co Working and <strong>'S'</strong>{" "}
          for Spaces.
        </p>
        <p>
          The design of the <strong>'CS'</strong> acronym in Co Working Spaces
          draws inspiration from diverse seating arrangements commonly found in
          coworking environments. The circle symbolizes the people, while the
          surrounding shape represents the variety of seating options available.
        </p>
        <p>
          As Hyderabad's premier provider of flexible workspace solutions, we
          serve a diverse clientele, including successful entrepreneurs,
          individuals, and multinational corporations.
        </p>
        <h3 className="text-2xl font-semibold text-purple-700 mt-4">
          About Our Co-Working Spaces
        </h3>
        <p>
          CS CO WORKING SPACES was founded in 2018. With constantly increasing
          prices in the real estate for commercial spaces, we came up with the
          idea of co-working spaces at very affordable and reliable prices. We
          operate in 4 prime locations across Hyderabad: Kondapur, Shaikpet,
          Gachibowli, and HITEC City, serving over 100+ clients.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-green-600">Our Mission</h3>
          <p>
            To bring a diverse collection of interesting individuals who are on
            the forefront of innovation, creativity, and achievement together
            under one roof.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-pink-600">Our Vision</h3>
          <p>
            To change the workplace scenario by moving from the
            architecture-based mundane model to experience-based collaborative
            workspaces.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-full transition">
            Meet Our Team
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
