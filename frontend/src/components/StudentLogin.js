import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle student login logic here
    navigate('/dashboard');

    console.log('Student Email:', email);
    console.log('Student Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Student Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login as Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;

// // src/components/StudentLogin.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { FaGoogle, FaApple } from 'react-icons/fa'; // Import icons from react-icons
// import backgroundImage from '/Users/salonisharma/student-issues-counseling-system/frontend/src/login-ill-page.jpg'; // Import the local image

// function StudentLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle student login logic here
//     navigate('/dashboard');

//     console.log('Student Email:', email);
//     console.log('Student Password:', password);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side: Background Image */}
//       <div
//         className="w-1/2 bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
//       >
//         {/* Optionally add a dark overlay for better contrast */}
//         {/* <div className="h-full bg-black bg-opacity-40 flex items-center justify-center"> */}
//           {/* Add any content or branding here if needed */}
//         {/* </div> */}
//       </div>
      
//       {/* Right side: Login Form */}
//       <div className="w-1/2 p-8 bg-white flex flex-col justify-center space-y-6">
//         <h2 className="text-3xl font-semibold text-center text-blue-600">Student Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Login as Student
//           </button>
//         </form>
//         <div className="flex flex-col space-y-4 mt-4">
//           <button
//             className="flex items-center justify-center px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
//           >
//             <FaGoogle className="mr-2 text-red-600" /> Login with Google
//           </button>
//           <button
//             className="flex items-center justify-center px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
//           >
//             <FaApple className="mr-2 text-black" /> Login with Apple ID
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentLogin;

