import React from "react";
import Cabin1 from "../assets/images/cabin1.jpg";
import Cabin2 from "../assets/images/cabin2.jpg";
import Cabin3 from "../assets/images/cabin3.jpg";
import Cabin4 from "../assets/images/cabin4.jpg";
import Cabin5 from "../assets/images/cabin5.jpg";
import Cabin6 from "../assets/images/cabin6.jpg";
import Cabin7 from "../assets/images/cabin7.jpg";

const workspaceInfo = [
  {
    title: "OPEN SEATS",
    image: Cabin1,
    description:
      'An "open seat" means that there is a workspace, such as a desk or a spot at a communal table, that is not reserved for a specific individual.',
  },
  {
    title: "1 SEATER CABINS",
    image: Cabin2,
    description:
      "Single-seater cabins in a coworking space are private, enclosed workspaces designed for individual use.",
  },
  {
    title: "2 SEATER CABINS",
    image: Cabin3,
    description:
      "Workspace designed for two individuals to work together that offer a private and collaborative environment.",
  },
  {
    title: "3 SEATER CABINS",
    image: Cabin4,
    description:
      'The term "3-seater" indicates that this cabin can accommodate up to three people. Convenient for small teams.',
  },
  {
    title: "4 SEATER CABINS",
    image: Cabin5,
    description:
      "Spacious cabins suited for a small group or a department, fostering collaboration and productivity.",
  },
  {
    title: "5 SEATER CABINS",
    image: Cabin6,
    description:
      "Perfect for slightly larger teams that need a common working space without distractions.",
  },
  {
    title: "6 SEATER CABINS",
    image: Cabin7,
    description:
      "Designated area where six individuals or a team can work together comfortably with some privacy.",
  },
];

export default function Workspaces() {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Workspaces
      </h2>
      <div className="space-y-10">
        {workspaceInfo.map((space, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl p-4 md:p-10 transition duration-300 hover:from-purple-200 hover:to-pink-200`}
          >
            <img
              src={space.image}
              alt={space.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="md:w-1/2 md:pl-10 md:pr-10 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {space.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {space.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
