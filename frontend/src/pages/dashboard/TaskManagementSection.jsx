import React, { useState } from "react";
import {
  FaClipboardList,
  FaUserCircle,
  FaPlus,
  FaClock,
  FaExclamationCircle,
  FaCheckCircle,
  FaFilter
} from "react-icons/fa";

const TaskManagementSection = () => {
  const [taskView, setTaskView] = useState('kanban');

  const tasks = [
    {
      id: 1,
      title: 'Finalize speakers list',
      description: 'Contact and confirm all speakers for the Technical Workshop',
      deadline: '2023-06-10',
      priority: 'High',
      status: 'In Progress',
      assignee: {
        name: 'John Doe',
        avatar: 'JD'
      }
    },
    {
      id: 2,
      title: 'Book auditorium',
      description: 'Reserve Auditorium 1 for the Technical Workshop',
      deadline: '2023-06-08',
      priority: 'High',
      status: 'Completed',
      assignee: {
        name: 'Jane Smith',
        avatar: 'JS'
      }
    },
    {
      id: 3,
      title: 'Design event posters',
      description: 'Create promotional posters for the Technical Workshop',
      deadline: '2023-06-12',
      priority: 'Medium',
      status: 'Not Started',
      assignee: {
        name: 'Mike Johnson',
        avatar: 'MJ'
      }
    }
  ];

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  const renderKanbanColumn = (title, status, accentColor) => (
    <div className="flex-1 min-w-[300px] bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <span className="text-xs text-gray-500">{getTasksByStatus(status).length}</span>
      </div>
      <div className="space-y-3">
        {getTasksByStatus(status).map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                task.priority === 'High' 
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
              }`}>
                {task.priority}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{task.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                  {task.assignee.avatar}
                </div>
                <span className="text-xs text-gray-500">{task.assignee.name}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <FaClock className="mr-1" />
                {task.deadline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Task Management</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
            <FaPlus className="mr-2" />
            New Task
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                taskView === 'kanban'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setTaskView('kanban')}
            >
              Kanban Board
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                taskView === 'list'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setTaskView('list')}
            >
              List View
            </button>
          </div>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-4">
          {renderKanbanColumn('Not Started', 'Not Started', 'gray')}
          {renderKanbanColumn('In Progress', 'In Progress', 'blue')}
          {renderKanbanColumn('Completed', 'Completed', 'green')}
        </div>
      </div>
    </section>
  );
};

export default TaskManagementSection;
