import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';

const SetupCommittees = () => {
  const navigate = useNavigate();
  const [collegeData, setCollegeData] = useState({
    name: '',
    code: '',
    committees: []
  });
  const [newCommittee, setNewCommittee] = useState({
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
    
    // You would typically fetch college data here
    // For now, we'll use mock data
    setCollegeData({
      name: 'Test College',
      code: 'ABC123',
      committees: []
    });
  }, [navigate]);

  const handleAddCommittee = () => {
    if (!newCommittee.name) {
      setError('Committee name is required');
      return;
    }

    setCollegeData(prev => ({
      ...prev,
      committees: [...prev.committees, { ...newCommittee }]
    }));
    
    setNewCommittee({
      name: '',
      description: ''
    });
    
    setError('');
  };

  const handleRemoveCommittee = (index) => {
    setCollegeData(prev => ({
      ...prev,
      committees: prev.committees.filter((_, i) => i !== index)
    }));
  };

  const handleSaveCommittees = async () => {
    setLoading(true);
    
    try {
      // In a real app, you would call an API to save the committees
      // For now, we'll just simulate a successful save
      console.log('Saving committees:', collegeData.committees);
      
      setTimeout(() => {
        setLoading(false);
        setSuccess('Committees saved successfully!');
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }, 1500);
    } catch (error) {
      setLoading(false);
      setError('Failed to save committees. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Setup Committees</h1>
          <p className="mt-2 text-gray-600">
            Create and manage committees for {collegeData.name}
          </p>
        </div>
        
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
            {success}
          </div>
        )}
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Committee</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
              <div>
                <label htmlFor="committeeName" className="block text-sm font-medium text-gray-700 mb-1">
                  Committee Name*
                </label>
                <input
                  type="text"
                  id="committeeName"
                  value={newCommittee.name}
                  onChange={(e) => setNewCommittee(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="e.g., Technical Committee"
                />
              </div>
              
              <div>
                <label htmlFor="committeeDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  id="committeeDescription"
                  value={newCommittee.description}
                  onChange={(e) => setNewCommittee(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Brief description of the committee"
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleAddCommittee}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <FaPlus className="mr-2" />
              Add Committee
            </button>
          </div>
        </div>
        
        {collegeData.committees.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Committees</h2>
              
              <div className="space-y-4">
                {collegeData.committees.map((committee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-800">{committee.name}</h3>
                      {committee.description && (
                        <p className="text-sm text-gray-500">{committee.description}</p>
                      )}
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => handleRemoveCommittee(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSaveCommittees}
                  disabled={loading}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <FaSave className="mr-2" />
                  {loading ? 'Saving...' : 'Save Committees'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 p-6 text-center text-gray-500">
            No committees added yet. Use the form above to add committees.
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupCommittees;
