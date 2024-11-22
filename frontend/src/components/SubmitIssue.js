import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SubmitIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  // const [attachment, setAttachment] = useState(null);
  const [date, setDate] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const navigate = useNavigate();
   
  const api = 'http://localhost:3002'

const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !description || !category || !date) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${api}/issue/postIssue`, {
        title,
        description,
        category,
        date
      });

      if (response.status === 200) {
        alert('Issue submitted successfully');
      }
    } catch (error) {
      console.log(date);
      console.log(error);
      setError("Error creating issue. Please try again.");
    }
    setLoading(false);
    clearForm();
  };



  // Clear form function
  const clearForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setDate('');
  };


  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-50 p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Submit an Issue</h1>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-semibold mb-2">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="academic">Academic</option>
            <option value="personal">Personal</option>
            <option value="Campus-related">Campus-related</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="issueDate" className="block text-gray-700 text-sm font-semibold mb-2">Issue Date</label>
          <input
            type="date"
            id="issueDate"
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-lg hover:bg-gray-400 transition duration-300"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitIssue;
