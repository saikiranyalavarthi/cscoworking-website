import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header.png";

const Navbar = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locationRef = useRef();
  const workspaceRef = useRef();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationOpen(false);
      }
      if (
        workspaceRef.current &&
        !workspaceRef.current.contains(event.target)
      ) {
        setWorkspaceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Coworking Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-700 font-medium relative">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About Us
            </Link>
          </li>

          {/* Locations */}
          <li className="relative" ref={locationRef}>
            <button
              onClick={() => {
                setLocationOpen(!locationOpen);
                setWorkspaceOpen(false);
              }}
              className="flex items-center space-x-1 hover:text-blue-600 transition"
            >
              <span>Locations</span>
              <span className="text-xs font-bold">+</span>
            </button>
            {locationOpen && (
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-48 text-sm z-10">
                {[
                  "Kondapur",
                  "Gachibowli",
                  "Shaikpet",
                  "Toli Chowki",
                  "Hitech City",
                ].map((loc) => (
                  <li key={loc}>
                    <Link
                      to={`/locations#${loc.replace(/\s/g, "").toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-blue-100 transition"
                      onClick={() => setLocationOpen(false)}
                    >
                      {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Workspaces */}
          <li className="relative" ref={workspaceRef}>
            <button
              onClick={() => {
                setWorkspaceOpen(!workspaceOpen);
                setLocationOpen(false);
              }}
              className="flex items-center space-x-1 hover:text-blue-600 transition"
            >
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
                    <Link
                      to={`/workspaces#${ws.replace(/\s/g, "").toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-blue-100 transition"
                      onClick={() => setWorkspaceOpen(false)}
                    >
                      {ws}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Enquire Now (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
          >
            Enquire Now
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Locations */}
          <details className="text-gray-700">
            <summary className="cursor-pointer py-1">Locations</summary>
            <div className="pl-4 pt-1 space-y-1">
              {[
                "Kondapur",
                "Gachibowli",
                "Shaikpet",
                "Toli Chowki",
                "Hitech City",
              ].map((loc) => (
                <Link
                  key={loc}
                  to={`/locations#${loc.replace(/\s/g, "").toLowerCase()}`}
                  className="block hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {loc}
                </Link>
              ))}
            </div>
          </details>

          {/* Workspaces */}
          <details className="text-gray-700">
            <summary className="cursor-pointer py-1">Work Spaces</summary>
            <div className="pl-4 pt-1 space-y-1">
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
                <Link
                  key={ws}
                  to={`/workspaces#${ws.replace(/\s/g, "").toLowerCase()}`}
                  className="block hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ws}
                </Link>
              ))}
            </div>
          </details>

          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Enquire Now */}
          <Link
            to="/contact"
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
