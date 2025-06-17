import React from "react";

const Aboutus = () => {
  return (
    <div className="relative py-12 px-6 sm:px-8 md:px-16 bg-white">
      {/* Background Gradient Decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-blue-300 opacity-30 blur-2xl rounded-3xl z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-gray-800 max-w-5xl mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
          About Us
        </h1>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            About Our Co-Working Spaces
          </h2>
          <p className="mb-2">
            <span className="font-semibold">CS CO WORKING SPACES</span> was
            founded in 2018. With constantly increasing prices in real estate
            for commercial spaces, we came up with the idea of coworking spaces
            at affordable and reliable prices.
          </p>
          <p>
            We currently operate in 4 locations across Hyderabad —{" "}
            <strong>Kondapur, Shaikpet, Gachibowli</strong>, and{" "}
            <strong>HITEC City</strong> — serving over 100+ clients.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-green-600">
            Our Mission
          </h2>
          <p>
            To bring together a diverse collection of innovative, creative, and
            accomplished individuals under one roof.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">
            Our Vision
          </h2>
          <p>
            To change traditional workspaces by shifting from architecture-based
            models to experience-driven, collaborative environments.
          </p>
        </div>

        {/* Founders */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            Founders & History
          </h2>
          <p className="mb-2">
            Founded by <strong>Gopal Das Agarwal</strong> and{" "}
            <strong>Anand Ramachandran</strong> in 2018, CS Co Working Spaces
            aimed to meet the rising demand for workspaces with an affordable
            and collaborative model.
          </p>
          <p className="mb-2">
            Our logo combines the initials <strong>'C'</strong> for Co Working
            and <strong>'S'</strong> for Spaces. The circular design symbolizes
            people, while the outer shapes represent different seating
            arrangements.
          </p>
          <p>
            We serve a wide range of clients — from freelancers to multinational
            corporations — as Hyderabad’s premier provider of flexible workspace
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
