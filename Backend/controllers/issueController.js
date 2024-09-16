// // Backend/controllers/issueController.js

// const db = require('../config/db');

// // Submit a new issue
// const submitIssue = (req, res) => {
//   const { title, description, userId } = req.body;
//   const query = 'INSERT INTO issues (title, description, user_id) VALUES (?, ?, ?)';

//   db.query(query, [title, description, userId], (err, results) => {
//     if (err) {
//       console.error('Error inserting issue:', err);
//       return res.status(500).json({ error: 'Failed to submit issue' });
//     }
//     res.status(201).json({ message: 'Issue submitted successfully' });
//   });
// };

// // Get all issues
// const getIssues = (req, res) => {
//   const query = 'SELECT * FROM issues';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching issues:', err);
//       return res.status(500).json({ error: 'Failed to fetch issues' });
//     }
//     res.status(200).json(results);
//   });
// };

// module.exports = { submitIssue, getIssues };

