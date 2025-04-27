import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  const notifications = [
    { id: 1, message: "New task assigned: Review event budget", time: "2 hours ago" },
    { id: 2, message: "Technical Workshop registration is now open", time: "1 day ago" },
    { id: 3, message: "Budget for Cultural Night approved", time: "2 days ago" }
  ];

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-gray-500 hover:text-gray-700">
                <FaBell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <FaUserCircle className="h-8 w-8 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
