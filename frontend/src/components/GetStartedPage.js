
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios

function AuthPage() {
  const [userType, setUserType] = useState('STUDENT'); // To toggle between student and admin
  const [fullName, setFullName] = useState(''); // For signup (create account)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle errors
  const navigate = useNavigate(); // Initialize navigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const api = "http://localhost:3002/"

  // Handle login API call
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${api}auth/login`, { email, password,role: userType });
      const { token,user } = response.data;

      // Save the token (you may want to store it in localStorage or context)
      localStorage.setItem('token', token);

      // Navigate based on user type
      navigate("/dashboard")
      

    } catch (error) {
      console.log(error)
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">

  
        <div className="mb-4">
          <label className="block text-gray-600 mb-2 text-sm">Login as:</label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to your {userType} account</h2>
            <motion.input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              onClick={handleLogin} // Trigger the login action
              className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </motion.div>

          <p className="text-sm text-center text-gray-600 mt-4">
            Do not have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up 
            </Link>
          </p>
        
      </div>
    </div>
  );
}

export default AuthPage;




// import React, { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { AiFillApple } from 'react-icons/ai';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios'; // Import axios

// function AuthPage() {
//   const [userType, setUserType] = useState('STUDENT'); // To toggle between student and admin
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null); // To handle errors
//   const navigate = useNavigate(); // Initialize navigate

//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value);
//   };

//   const api = "http://localhost:3002/";

//   // Handle login API call
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${api}auth/login`, {
//         email,
//         password,
//         role: userType,
//       });
  
//       const { user } = response.data;
  
//       if (user.role === 'STUDENT') {
//         alert("Student logged in successfully");
//         navigate('/dashboard');
//       } else if (user.role === 'ADMIN') {
//         alert("Admin logged in successfully");
//         navigate('/admin-dashboard');
//       }
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 200 range
//         setError(error.response.data.message || 'An error occurred');
//       } else if (error.request) {
//         // Request was made but no response
//         setError('No response from server. Please try again.');
//       } else {
//         // Something happened while setting up the request
//         setError('Error occurred during the login process.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2 text-sm">Login as:</label>
//           <select
//             value={userType}
//             onChange={handleUserTypeChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           >
//             <option value="STUDENT">Student</option>
//             <option value="ADMIN">Admin</option>
//           </select>
//         </div>

//         {/* Login Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to your {userType} account</h2>
//           <motion.input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           />
//           {error && <div className="text-red-500 text-sm">{error}</div>}

//           <button
//             onClick={handleLogin} // Trigger the login action
//             className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//           >
//             Login
//           </button>
//         </motion.div>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Do not have an account?{' '}
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Sign Up 
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AuthPage;
