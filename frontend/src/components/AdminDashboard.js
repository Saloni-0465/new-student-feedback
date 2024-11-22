import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [issues, setIssues] = useState([]);  // Initialize as an empty array
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [status, setStatus] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const issuesPerPage = 8;

  const statusMapping = {
    'Not Resolved': 1,
    'In Progress': 2,
    'Resolved': 3,
  };
  

  const apiUrl = 'http://localhost:3002/issue/getIssues'; 

  const fetchIssues = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch issues');
      }

      const issues = data.data.map((issue) => ({
        ...issue,
        status: statusMapping[issue.status_id] || 'Not-resolved',  
      }));

      setIssues(issues);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const updatStatus = async () => {
    if (!selectedIssue || !status) {
      console.log("Issue or Status is not selected");
      return;
    }
  
    try {
      const response = await axios.put('http://localhost:3002/issue/updateStatus', {
        issueId: selectedIssue.id,  
        newStatusId: statusMapping[status]  
      });
  
      if (response.status === 200) {
        console.log("Status updated successfully");
        
        setIssues(issues.map(issue =>
          issue.id === selectedIssue.id ? { ...issue, status } : issue
        ));
        setSelectedIssue(null);
        setStatus('');
      } else {
        console.log("Failed to update status");
      }
    } catch (err) {
      console.log("Error while updating status", err);
    }
  };
  
  const filteredIssues = issues.filter(issue => {
    return (
      (!filterDate || issue.date === filterDate) &&
      (!filterStatus || issue.status === filterStatus)
    );
  });

  
  const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

 
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  
  const handleEdit = (issue) => {
    setSelectedIssue(issue);
    setStatus(issue.status);
  };

  const handleUpdate = () => {
    if (selectedIssue) {

      updatStatus();
    }
  };

  const handleClose = () => {
    setSelectedIssue(null);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 min-h-screen">
      <header className="bg-blue-700 text-white py-4 shadow-lg rounded-t-lg">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      </header>
      <main className="mt-8">
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col sm:flex-row items-center">
            <label htmlFor="dateFilter" className="mr-2 text-gray-700 font-medium">Filter by Date:</label>
            <input
              type="date"
              id="dateFilter"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <label htmlFor="statusFilter" className="mr-2 text-gray-700 font-medium">Filter by Status:</label>
            <select
              id="statusFilter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">All</option>
              <option value="Not Resolved">Not Resolved</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Issue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentIssues.length > 0 ? (
            currentIssues.map((issue) => (
              <div
                key={issue.id}
                onClick={() => handleEdit(issue)}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{issue.title}</h3>
                <p className="text-gray-600 mb-2">{issue.description.slice(0, 50)}...</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">Category: {issue.category}</p>
                  <p className={`px-3 py-1 rounded-full text-sm ${
                    issue.status === 'Resolved' ? 'bg-green-200 text-green-700' :
                    issue.status === 'In Progress' ? 'bg-yellow-200 text-yellow-700' :
                    'bg-red-200 text-red-700'}`}>
                    {issue.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No issues found for the selected filters.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Previous
            </button>
            <p className="text-gray-700">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Enhanced Modal for updating issue status */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-r from-white via-gray-100 to-gray-50 p-8 rounded-lg shadow-2xl border border-gray-300 max-w-xl w-full transform transition-all duration-500 ease-in-out scale-100 hover:scale-105 animate-fade-in">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl focus:outline-none transition-transform duration-300 hover:scale-125"
            >
              &times;
            </button>
            <h3 className="text-4xl font-extrabold text-gray-800 mb-6 leading-snug tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              {selectedIssue.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {selectedIssue.description}
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
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-400 transition-all"
                >
                  Close
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
