import React from "react";
import logo from "../assets/logo-header.png";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const locations = [
  {
    title: "Gachibowli",
    address:
      "3rd floor, KNR square, door no.1-60/8/A&B, OPP. The Platina, Gachibowli, Hyderabad-500032",
  },
  {
    title: "Shaikpet",
    address:
      "2nd, 4th floor, Aparna Astute, Shaikpet, Jubilee Hills, Hyderabad-500008",
  },
  {
    title: "Kondapur",
    address:
      "4th and 5th floor, Doc Bhavan, H. NO. 2-91/12/4/NR, Plot No-4, Kondapur, Hyderabad-500032",
  },
  {
    title: "Hitec City",
    address:
      "2nd and 5th floor plot no 2-41/13/PMR, Khanamet, Hitex Road, Izzathnagar, Hyderabad, 500084",
  },
  {
    title: "Toli Chowki",
    address:
      "SATTAVA MAGNUS B507, Sabza Colony, Brindavan Colony, Toli Chowki, Hyderabad, Telangana",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Logo */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="h-20 mb-3" />

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Locations */}
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-lg font-semibold text-blue-700 mb-2 border-b-2 border-blue-500 w-fit pb-1">
              {loc.title}
            </h3>
            <p className=" text-black flex gap-2 leading-relaxed text-bold">
              <MdLocationOn className="text-pink-700 mt-1" size={32} />
              {loc.address}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-50 border-t border-blue-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-3 md:mb-0 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-700 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Contact
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Locations
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Workspaces
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Terms
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-center">
            <span className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-blue-700">
                CS Co Working Spaces
              </span>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
