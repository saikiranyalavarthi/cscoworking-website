import React, { useState } from "react";
import logo from "../assets/logo-header.png";

const Navbar = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Coworking Logo" className="h-12 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-700 font-medium relative">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              About Us
            </a>
          </li>

          {/* LOCATIONS */}
          <li
            className="relative"
            onMouseEnter={() => setLocationOpen(true)}
            onMouseLeave={() => setLocationOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-blue-600 transition">
              <span>Locations</span>
              <span className="text-xs font-bold">+</span>
            </button>
            {locationOpen && (
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-48 text-sm">
                {[
                  "Kondapur",
                  "Gachibowli",
                  "Shaikpet",
                  "Toli Chowki",
                  "Hitech City",
                ].map((loc) => (
                  <li key={loc}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-100 transition"
                    >
                      {loc}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* WORK SPACES */}
          <li
            className="relative"
            onMouseEnter={() => setWorkspaceOpen(true)}
            onMouseLeave={() => setWorkspaceOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-blue-600 transition">
              <span>Work Spaces</span>
              <span className="text-xs font-bold">+</span>
            </button>
            {workspaceOpen && (
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-56 text-sm z-10">
                {[
                  "Cabins",
                  "Open Seats",
                  "Virtual Office",
                  "1 Seater Cabins",
                  "2 Seater Cabins",
                  "3 Seater Cabins",
                  "6 Seater Cabins",
                  "Day Pass",
                  "Conference Room",
                ].map((ws) => (
                  <li key={ws}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-100 transition"
                    >
                      {ws}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Enquire Now */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold">
            Enquire Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
