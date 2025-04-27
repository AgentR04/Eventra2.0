import React, { useState } from "react";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaExclamationTriangle,
  FaFilter
} from "react-icons/fa";

const SchedulingSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedulingView, setSchedulingView] = useState('calendar');

  const upcomingEvents = [
    { 
      id: 1, 
      name: 'Technical Workshop', 
      date: '2023-06-15', 
      startTime: '10:00', 
      endTime: '12:00',
      venue: 'Auditorium 1',
      status: 'Upcoming'
    },
    { 
      id: 2, 
      name: 'Cultural Night', 
      date: '2023-06-18', 
      startTime: '18:00', 
      endTime: '21:00',
      venue: 'Main Ground',
      status: 'Planning'
    }
  ];

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Event Scheduling</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
            New Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Calendar</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                Day
              </button>
              <button className="px-3 py-1 text-sm text-white bg-primary-600 rounded">
                Week
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                Month
              </button>
            </div>
          </div>
          {/* Calendar grid would go here */}
          <div className="border rounded-lg p-4 text-center text-gray-500">
            Calendar Component Placeholder
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
          </div>
          <div className="divide-y">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{event.name}</h4>
                    <div className="mt-1 text-xs text-gray-500 space-y-1">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        {event.startTime} - {event.endTime}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    event.status === 'Upcoming' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conflicts Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <FaExclamationTriangle className="text-yellow-500 mr-2" />
            Scheduling Conflicts
          </h3>
        </div>
        <div className="text-sm text-gray-500">
          No conflicts detected for the selected time period.
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
