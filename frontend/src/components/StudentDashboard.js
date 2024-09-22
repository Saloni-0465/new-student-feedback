// src/components/StudentDashboard.js
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import ViewIssues from './ViewIssues'; // Component for viewing submitted issues
import UpdateProfile from './UpdateProfile'; // Component for updating profile
import CounselingResources from './CounselingResources'; // Component for accessing resources
import ContactSupport from './ContactSupport'; // Component for contacting support

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('view-issues');
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, user data, etc.)

    // Redirect to homepage
    navigate('/');
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
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
            {/* <li>
              <Link
                to="/dashboard/counseling-resources"
                className={`block py-2 px-4 rounded hover:bg-blue-800 ${activeTab === 'counseling-resources' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('counseling-resources')}
              >
                Counseling Resources
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/dashboard/contact-support"
                className={`block py-2 px-4 rounded hover:bg-blue-800 ${activeTab === 'contact-support' ? 'bg-blue-800' : ''}`}
                onClick={() => setActiveTab('contact-support')}
              >
                Contact Support
              </Link>
            </li> */}
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

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="view-issues" element={<ViewIssues />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          {/* <Route path="counseling-resources" element={<CounselingResources />} /> */}
          <Route path="contact-support" element={<ContactSupport />} />
          {/* Default route if none of the above are matched */}
          <Route path="*" element={<ViewIssues />} />
        </Routes>
      </main>
    </div>
  );
}

export default StudentDashboard;

