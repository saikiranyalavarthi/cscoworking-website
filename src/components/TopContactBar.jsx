import React from "react";

const TopContactBar = () => {
  return (
    <div className="bg-blue-500 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <p className="truncate w-full sm:w-auto">
          coworkingspaces.hyd@gmail.com
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span>📞 040-40140662</span>
          <span>📱 +91 98490 19209</span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
