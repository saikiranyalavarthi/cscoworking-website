import React from "react";

// Import all 7 cabin images
import Cabin1 from "../assets/images/cabin1.jpg";
import Cabin2 from "../assets/images/cabin2.jpg";
import Cabin3 from "../assets/images/cabin3.jpg";
import Cabin4 from "../assets/images/cabin4.jpg";
import Cabin5 from "../assets/images/cabin5.jpg";
import Cabin6 from "../assets/images/cabin6.jpg";
import Cabin7 from "../assets/images/cabin7.jpg";
import Cabin8 from "../assets/images/cabin6.jpg";

const images = [
  { title: "OPEN SEATS", image: Cabin1 },
  { title: "1 SEATER CABINS", image: Cabin2 },
  { title: "2 SEATER CABINS", image: Cabin3 },
  { title: "3 SEATER CABINS", image: Cabin4 },
  { title: "4 SEATER CABINS", image: Cabin5 },
  { title: "5 SEATER CABINS", image: Cabin6 },
  { title: "6 SEATER CABINS", image: Cabin7 },
  { title: "CONFERANCE ROOM", image: Cabin8 },
];

const ModernWorkspaces = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Modern Work Spaces
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            There are many variations of passages available but the majority
            suffered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((space, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow group hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-500"
            >
              <div className="overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center group-hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {space.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernWorkspaces;
