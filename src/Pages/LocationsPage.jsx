import React from "react";
import Location1 from "../assets/Locations/Location1.jpg";
import Location2 from "../assets/Locations/Location2.jpg";
import Location3 from "../assets/Locations/Location3.jpg";
import Location4 from "../assets/Locations/Location4.jpg";
import Location5 from "../assets/Locations/Location5.jpg";

const locations = [
  {
    name: "Gachibowli",
    address:
      "2nd and 3rd floor, KNR square, door no.1-60/8/A&B, OPP. The Platina, Gachibowli, Hyderabad-500032.",
    image: Location1,
  },
  {
    name: "Shaikpet",
    address:
      "2nd, 3rd and 4th floor, Aparna Astute, Shaikpet, Jubilee Hills, Hyderabad-500008.",
    image: Location2,
  },
  {
    name: "Kondapur",
    address:
      "4th and 5th floor, Doc Bhavan, H. NO. 2-91/12/4/NR, Plot No-4, Kondapur, Hyderabad-500032.",
    image: Location3,
  },
  {
    name: "HITEC City",
    address:
      "2nd and 5th floor, Plot No 2-41/13/PMR, Khanamet, Hitex Road, Izzathnagar, Hyderabad, Telangana 500084.",
    image: Location4,
  },
  {
    name: "Toli Chowki",
    address:
      "2nd and 3rd floor, H. No. 8-2-293/82/A/131, Road No. 10, Banjara Hills, Toli Chowki, Hyderabad-500034.",
    image: Location5,
  },
];

const LocationsPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Locations
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center bg-gradient-to-br from-gray-100 to-gray-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 rounded-2xl shadow-md overflow-hidden`}
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full md:w-1/2 h-60 sm:h-80 md:h-96 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-6 sm:p-8 md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {loc.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {loc.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
