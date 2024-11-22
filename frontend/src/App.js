import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubmitIssue from './components/SubmitIssue';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/GetStartedPage';
import SuccessPage from './components/SuccessPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactSupport';
import ContactSuccessPage from './components/ContactSuccessPage';
import SignupPage from './components/SignupForm';
import ProfileUpdateSuccess from './components/UpdatedProfile';

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-issue" element={<SubmitIssue />} />
        <Route path="/dashboard/*" element={<StudentDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/success" element={<SuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/success" element={<ContactSuccessPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/profile-update-success" element={<ProfileUpdateSuccess />} />

      </Routes>
    </>
    
  );
}

export default App;






