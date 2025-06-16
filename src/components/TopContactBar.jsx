import React from "react";

const TopContactBar = () => {
  return (
    <div className="bg-black text-white text-sm py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <p className="truncate"> coworkingspaces.hyd@gmail.com</p>
        <div className="space-x-4">
          <span>📞 040-40140662</span>
          <span>📱 +91 98490 19209</span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
