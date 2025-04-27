import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
