import React from "react";
import { 
  FaBell, 
  FaPlus, 
  FaFilter, 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaInfoCircle 
} from "react-icons/fa";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: 'Technical Workshop Registration Open',
      content: 'Registration for the upcoming technical workshop is now open. Limited seats available.',
      type: 'important',
      date: '2023-06-15',
      time: '10:30 AM',
      author: 'John Doe',
      committee: 'Technical'
    },
    {
      id: 2,
      title: 'Cultural Night Venue Change',
      content: 'Due to weather conditions, the Cultural Night venue has been changed to the Main Auditorium.',
      type: 'urgent',
      date: '2023-06-18',
      time: '2:00 PM',
      author: 'Jane Smith',
      committee: 'Cultural'
    },
    {
      id: 3,
      title: 'Sponsorship Update',
      content: 'TechCorp has confirmed their Gold sponsorship for the upcoming events.',
      type: 'info',
      date: '2023-06-20',
      time: '11:00 AM',
      author: 'Mike Wilson',
      committee: 'Sponsorship'
    }
  ];

  const getAnnouncementIcon = (type) => {
    switch (type) {
      case 'urgent':
        return <FaExclamationCircle className="text-red-500" />;
      case 'important':
        return <FaCheckCircle className="text-yellow-500" />;
      default:
        return <FaInfoCircle className="text-blue-500" />;
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
            <FaPlus className="mr-2" />
            New Announcement
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  {getAnnouncementIcon(announcement.type)}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{announcement.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      announcement.type === 'urgent'
                        ? 'bg-red-100 text-red-800'
                        : announcement.type === 'important'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {announcement.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{announcement.content}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <span>{announcement.date}</span>
                    <span className="mx-2">•</span>
                    <span>{announcement.time}</span>
                    <span className="mx-2">•</span>
                    <span>By {announcement.author}</span>
                    <span className="mx-2">•</span>
                    <span>{announcement.committee} Committee</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
