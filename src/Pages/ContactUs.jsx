import React from "react";

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-blue-300 opacity-30 blur-2xl rounded-3xl z-0 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 text-gray-800 px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        {/* Pricing */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">
            Per sqft starts from{" "}
            <span className="text-red-600 font-bold text-xl">₹9999/-</span>
          </p>
        </div>

        {/* Office Locations */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Office Spaces Locations
          </h2>
          <p>Gachibowli, Shaikpet, Kondapur, Hitec-city</p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-xl font-semibold mb-1">Call Us</h2>
            <p>040-40140662</p>
            <p>+91 98490 19209</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Email Us</h2>
            <p>coworkingspaces.hyd@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
