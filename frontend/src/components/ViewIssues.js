import React, { useState } from 'react';

// Example issues as dummy data with status
const exampleIssues = [
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
  {
    id: 9,
    title: 'Technical Issue with Portal',
    description: 'Unable to log in to the student portal. Error message displayed is "Invalid credentials".',
    category: 'Technical',
    date: '2024-09-15',
    status: 'Not Resolved',
  },
  {
    id: 10,
    title: 'Counseling Resources Not Accessible',
    description: 'The link to the counseling resources is broken. Students cannot access the support documents.',
    category: 'Resource',
    date: '2024-09-16',
    status: 'Resolved',
  },
  {
    id: 11,
    title: 'Classroom Temperature Issues',
    description: 'The classroom temperature is too high and uncomfortable for students during lectures.',
    category: 'Facilities',
    date: '2024-09-17',
    status: 'In Progress',
  },
  {
    id: 12,
    title: 'Wrong Grade Assigned',
    description: 'Received an incorrect grade for the final exam. The grade does not match the marks obtained.',
    category: 'Academic',
    date: '2024-09-18',
    status: 'Not Resolved',
  },
  {
    id: 13,
    title: 'Payment Discrepancy',
    description: 'The payment for the semester fee has not been reflected in the system. Need urgent assistance.',
    category: 'Financial',
    date: '2024-09-19',
    status: 'Resolved',
  },
  // Add more issues as needed
];

function ViewIssues() {
  const [issues] = useState(exampleIssues);
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState(''); // State to filter by status
  const [currentPage, setCurrentPage] = useState(1);
  const issuesPerPage = 8;

  // Filter issues based on date and status
  const filteredIssues = issues.filter(issue => {
    return (
      (!filterDate || issue.date === filterDate) &&
      (!filterStatus || issue.status === filterStatus)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

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

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submitted Issues</h2>

      {/* Date and Status Filter */}
      <div className="mb-4 flex items-center justify-between">
        {/* Date Picker */}
        <div className="flex items-center">
          <label htmlFor="dateFilter" className="mr-2 text-gray-700 font-semibold">Filter by Date:</label>
          <input
            type="date"
            id="dateFilter"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center">
          <label htmlFor="statusFilter" className="mr-2 text-gray-700 font-semibold">Filter by Status:</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="">All</option>
            <option value="Not Resolved">Not Resolved</option>
            <option value="Resolved">Resolved</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentIssues.length > 0 ? (
            currentIssues.map((issue) => (
              <tr key={issue.id}>
                <td className="py-2 px-4 border-b text-center">{issue.id}</td>
                <td className="py-2 px-4 border-b">{issue.title}</td>
                <td className="py-2 px-4 border-b">{issue.description}</td>
                <td className="py-2 px-4 border-b">{issue.category}</td>
                <td className="py-2 px-4 border-b text-center">{issue.date}</td>
                <td className="py-2 px-4 border-b text-center">{issue.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-2 px-4 text-center text-gray-500">
                No issues found for the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-white rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 transition duration-300'}`}
          >
            Previous
          </button>
          <p className="text-gray-700">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-white rounded-md ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 transition duration-300'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewIssues;
