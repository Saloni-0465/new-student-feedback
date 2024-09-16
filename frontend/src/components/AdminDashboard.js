import React, { useState } from 'react';

function AdminDashboard() {
  const initialIssues = [
    {
        id: 1,
        title: 'Technical Issue with Portal',
        description: 'Unable to log in to the student portal. Error message displayed is "Invalid credentials".',
        category: 'Technical',
        date: '2024-09-15',
        status: 'Not Resolved',
      },
      {
        id: 2,
        title: 'Counseling Resources Not Accessible',
        description: 'The link to the counseling resources is broken. Students cannot access the support documents.',
        category: 'Resource',
        date: '2024-09-16',
        status: 'Resolved',
      },
      {
        id: 3,
        title: 'Classroom Temperature Issues',
        description: 'The classroom temperature is too high and uncomfortable for students during lectures.',
        category: 'Facilities',
        date: '2024-09-17',
        status: 'In Progress',
      },
      {
        id: 4,
        title: 'Wrong Grade Assigned',
        description: 'Received an incorrect grade for the final exam. The grade does not match the marks obtained.',
        category: 'Academic',
        date: '2024-09-18',
        status: 'Not Resolved',
      },
      {
        id: 5,
        title: 'Payment Discrepancy',
        description: 'The payment for the semester fee has not been reflected in the system. Need urgent assistance.',
        category: 'Financial',
        date: '2024-09-19',
        status: 'Resolved',
      },
      {
        id: 6,
        title: 'Broken Library Equipment',
        description: 'Several pieces of equipment in the library are not working. This is affecting students\' research work.',
        category: 'Facilities',
        date: '2024-09-20',
        status: 'In Progress',
      },
      {
        id: 7,
        title: 'Outdated Course Material',
        description: 'The course material available online is outdated. Need updated versions for current coursework.',
        category: 'Academic',
        date: '2024-09-21',
        status: 'Not Resolved',
      },
      {
        id: 8,
        title: 'Hostel Maintenance Request',
        description: 'Requesting maintenance for leaking water pipes in the hostel room.',
        category: 'Facilities',
        date: '2024-09-22',
        status: 'Resolved',
      },
  ];

  const [issues, setIssues] = useState(initialIssues);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [status, setStatus] = useState('');

  const handleEdit = (issue) => {
    setSelectedIssue(issue);
    setStatus(issue.status);
  };

  const handleUpdate = () => {
    if (selectedIssue) {
      setIssues(issues.map(issue =>
        issue.id === selectedIssue.id ? { ...issue, status } : issue
      ));
      setSelectedIssue(null);
      setStatus('');
    }
  };

  const handleClose = () => {
    setSelectedIssue(null);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8 relative">
      <header className="bg-blue-700 text-white py-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      </header>
      <main className="mt-8">
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Manage Issues</h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map(issue => (
                <tr key={issue.id}>
                  <td className="border border-gray-300 p-2">{issue.id}</td>
                  <td className="border border-gray-300 p-2">{issue.title}</td>
                  <td className="border border-gray-300 p-2">{issue.description}</td>
                  <td className="border border-gray-300 p-2">{issue.category}</td>
                  <td className="border border-gray-300 p-2">{issue.date}</td>
                  <td className="border border-gray-300 p-2">{issue.status}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(issue)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Edit Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {selectedIssue && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full relative">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Edit Status for: {selectedIssue.title}</h3>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Description:</strong> {selectedIssue.description}
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md border-gray-300"
                >
                  <option value="Not Resolved">Not Resolved</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Update Status
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
