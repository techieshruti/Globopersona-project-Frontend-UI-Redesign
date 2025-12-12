import React from "react";
const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      

      {/* PAGE CONTENT */}
      <div className="ml-64 w-full p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
