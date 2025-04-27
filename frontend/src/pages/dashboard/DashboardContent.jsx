import React from "react";

const DashboardContent = ({ children }) => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default DashboardContent;
