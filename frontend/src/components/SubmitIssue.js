import React, { useState } from 'react';

function SubmitIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [issueDate, setIssueDate] = useState(''); // Date field

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Issue submitted!');
    // Clear form
    clearForm();
  };

  // Clear form function
  const clearForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setAttachment(null);
    setIssueDate('');
  };

  // Handle file upload and preview
  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
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
            <option value="emotional">Emotional</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="issueDate" className="block text-gray-700 text-sm font-semibold mb-2">Issue Date</label>
          <input
            type="date"
            id="issueDate"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Attachment */}
        <div className="mb-4">
          <label htmlFor="attachment" className="block text-gray-700 text-sm font-semibold mb-2">Attachment (Optional)</label>
          <input
            type="file"
            id="attachment"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {attachment && (
            <p className="mt-2 text-sm text-gray-600">
              Uploaded file: {attachment.name}
            </p>
          )}
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


