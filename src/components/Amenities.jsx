import React from "react";
import {
  MdAccessTime,
  MdTv,
  MdOutlineSecurity,
  MdDoorFront,
  MdWifi,
  MdLocalCafe,
  MdLocalFlorist,
  MdDirectionsBus,
  MdEventSeat,
  MdMeetingRoom,
  MdPower,
  MdSupportAgent,
  MdLock,
  MdLocalParking,
  MdFireExtinguisher,
  MdAcUnit,
  MdShield,
} from "react-icons/md";

const amenities = [
  {
    title: "24*7 Office",
    description:
      "Accessible 24/7, 365 days a year, providing flexible work hours.",
    icon: <MdAccessTime size={28} className="text-blue-500" />,
  },
  {
    title: "Entertainment",
    description:
      "Enjoy leisure and fitness with facilities like snooker, TV, and a gym.",
    icon: <MdTv size={28} className="text-blue-500" />,
  },
  {
    title: "Professional Security",
    description: "Safe working environment with professional security.",
    icon: <MdShield size={28} className="text-blue-500" />,
  },
  {
    title: "Acoustic Cabins",
    description: "Acoustic high-grade cabins for focused work.",
    icon: <MdDoorFront size={28} className="text-blue-500" />,
  },
  {
    title: "Internet",
    description: "High-speed internet for seamless productivity.",
    icon: <MdWifi size={28} className="text-blue-500" />,
  },
  {
    title: "CCD",
    description: "Onsite Café Coffee Day for a delightful experience.",
    icon: <MdLocalCafe size={28} className="text-blue-500" />,
  },
  {
    title: "Green Walls",
    description: "Lush green walls with vertical plantations.",
    icon: <MdLocalFlorist size={28} className="text-blue-500" />,
  },
  {
    title: "Transportation",
    description: "Easy commute options available.",
    icon: <MdDirectionsBus size={28} className="text-blue-500" />,
  },
  {
    title: "Feather Lite Chairs",
    description: "Ergonomic feather-lite chairs for comfort.",
    icon: <MdEventSeat size={28} className="text-blue-500" />,
  },
  {
    title: "Conference Hall",
    description: "Spacious hall for productive meetings.",
    icon: <MdMeetingRoom size={28} className="text-blue-500" />,
  },
  {
    title: "100% Power Backup",
    description: "Reliable power for uninterrupted work.",
    icon: <MdPower size={28} className="text-blue-500" />,
  },
  {
    title: "Front Desk",
    description: "Helpful front desk to support your needs.",
    icon: <MdSupportAgent size={28} className="text-blue-500" />,
  },
  {
    title: "Locker",
    description: "Personal lockers for your valuables.",
    icon: <MdLock size={28} className="text-blue-500" />,
  },
  {
    title: "Good Parking",
    description: "Spacious and secure parking available.",
    icon: <MdLocalParking size={28} className="text-blue-500" />,
  },
  {
    title: "Fire and Safety",
    description: "Equipped with safety systems and fire extinguishers.",
    icon: <MdFireExtinguisher size={28} className="text-blue-500" />,
  },
  {
    title: "AC Units",
    description: "Indoor split & cassette A/C units for climate control.",
    icon: <MdAcUnit size={28} className="text-blue-500" />,
  },
];

const Amenities = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Amenities We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

              transition: "transform 0.3s ease",
            }}
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-lg font-semibold ml-3">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
