import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubmitIssue from './components/SubmitIssue';
import StudentDashboard from './components/StudentDashboard';
// import LoginPage from './components/LoginPage';
// import StudentLoginPage from './components/StudentLoginPage';
// import AdminLoginPage from './components/AdminLoginPage';
// import StudentLogin from './components/StudentLogin';
// import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AuthPage from './components/GetStartedPage';


function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-issue" element={<SubmitIssue />} />
        <Route path="/dashboard/*" element={<StudentDashboard />} />
        <Route path="/login" element={<AuthPage />} />
        {/* <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} /> */}
        {/* <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
    
  );
}

export default App;



