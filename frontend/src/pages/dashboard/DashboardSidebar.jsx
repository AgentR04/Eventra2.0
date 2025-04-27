import React from "react";
import { 
  FaColumns, 
  FaCalendarAlt, 
  FaClipboardList, 
  FaMoneyBillWave, 
  FaBell, 
  FaCog, 
  FaSignOutAlt 
} from "react-icons/fa";

const DashboardSidebar = () => {
  const navItems = [
    { id: 1, name: "Overview", icon: FaColumns, active: true },
    { id: 2, name: "Scheduling", icon: FaCalendarAlt },
    { id: 3, name: "Tasks", icon: FaClipboardList },
    { id: 4, name: "Budget", icon: FaMoneyBillWave },
    { id: 5, name: "Announcements", icon: FaBell }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm hidden lg:block">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 px-4">Eventra</h2>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                item.active
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className={`h-5 w-5 mr-3 ${
                item.active ? "text-primary-700" : "text-gray-400"
              }`} />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full left-0 p-4">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900"
            >
              <FaCog className="h-5 w-5 mr-3 text-gray-400" />
              Settings
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900"
            >
              <FaSignOutAlt className="h-5 w-5 mr-3 text-gray-400" />
              Sign out
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
