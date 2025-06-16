import React from "react";

// Import images directly (adjust paths if needed)
import Location1 from "../assets/Locations/Location1.jpg";
import Location2 from "../assets/Locations/Location2.jpg";
import Location3 from "../assets/Locations/Location3.jpg";
import Location4 from "../assets/Locations/Location4.jpg";
import Location5 from "../assets/Locations/Location5.jpg";

const centers = [
  {
    name: "Kondapur",
    image: Location1,
    link: "#kondapur",
  },
  {
    name: "Gachibowli",
    image: Location2,
    link: "#gachibowli",
  },
  {
    name: "Shaikpet",
    image: Location3,
    link: "#shaikpet",
  },
  {
    name: "Toli Chowki",
    image: Location4,
    link: "#tolichowki",
  },
  {
    name: "Hitech City",
    image: Location5,
    link: "#hitech",
  },
];

const Centers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          5 Centres Across Hyderabad
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {centers.map((center) => (
            <a
              key={center.name}
              href={center.link}
              className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <img
                src={center.image}
                alt={center.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                  {center.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Centers;
