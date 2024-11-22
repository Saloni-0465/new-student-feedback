// src/components/StudentDashboard.js
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ViewIssues from './ViewIssues'; 
import UpdateProfile from './UpdateProfile'; 
import SubmitIssue from './SubmitIssue'; 
function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('view-issues');
  const [issues, setIssues] = useState([]); 
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link
                to="/dashboard/view-issues"
                className={`block py-2 px-4 rounded hover:bg-blue-800 ${activeTab === 'view-issues' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('view-issues')}
              >
                View Submitted Issues
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/update-profile"
                className={`block py-2 px-4 rounded hover:bg-blue-800 ${activeTab === 'update-profile' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('update-profile')}
              >
                Update Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/submit-issue"
                className={`block py-2 px-4 rounded hover:bg-blue-800 ${activeTab === 'submit-issue' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('submit-issue')}
              >
                Submit Issue
              </Link>
            </li>
            <li className="mt-6">
              <button 
                onClick={handleLogout}
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Routes>
          <Route path="view-issues" element={<ViewIssues issues={issues} />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="submit-issue" element={<SubmitIssue />} /> {/* New Route for SubmitForm */}
          <Route path="*" element={<ViewIssues issues={issues} />} />
        </Routes>
      </main>
    </div>
  );
}

export default StudentDashboard;
