import React, { useEffect, useState } from 'react';

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issuesPerPage = 8;

  // Mapping status_id to status text
  const statusMapping = {
    1: 'unresolved',
    2: 'in-progress',
    3: 'resolved',
  };

  const fetchIssues = async () => {
    try {
      const response = await fetch('http://localhost:3002/issue/getIssues');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error('Failed to fetch issues');
      }

      const issues = data.data.map((issue) => ({
        ...issue,
        status: statusMapping[issue.status_id] || 'Unknown',  // Mapping status_id to status
      }));

      setIssues(issues);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  // Pagination handlers
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

  // Function to handle clicking on a card (issue)
  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedIssue(null);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Submitted Issues</h2>

      {/* Filters Section */}
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
      </div>

      {/* Issue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentIssues.length > 0 ? (
          currentIssues.map((issue) => (
            <div
              key={issue.id}
              onClick={() => handleIssueClick(issue)}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 hover:bg-blue-50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{issue.title}</h3>
              <p className="text-gray-600 mb-2">{issue.description.slice(0, 50)}...</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Category: {issue.category}</p>
                <p className={`px-3 py-1 rounded-full text-sm ${
                  issue.status === 'resolved' ? 'bg-green-200 text-green-700' :
                  issue.status === 'in-progress' ? 'bg-yellow-200 text-yellow-700' :
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

      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-r from-white via-gray-100 to-gray-50 p-8 rounded-lg shadow-2xl border border-gray-300 max-w-xl w-full transform transition-all duration-500 ease-in-out scale-100 hover:scale-105 animate-fade-in">
            <button
              onClick={closeModal}
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
            <div className="flex flex-col space-y-4 text-lg">
              <p className="text-gray-600">
                <strong className="text-gray-800">Category:</strong> {selectedIssue.category}
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Date:</strong> {selectedIssue.date}
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Status:</strong> {selectedIssue.status}
              </p>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewIssues;
