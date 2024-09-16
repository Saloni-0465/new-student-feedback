// // Backend/controllers/feedbackController.js

// const db = require('../config/db');

// // Submit feedback
// const submitFeedback = (req, res) => {
//   const { feedbackText, userId } = req.body;
//   const query = 'INSERT INTO feedback (feedback_text, user_id) VALUES (?, ?)';

//   db.query(query, [feedbackText, userId], (err, results) => {
//     if (err) {
//       console.error('Error inserting feedback:', err);
//       return res.status(500).json({ error: 'Failed to submit feedback' });
//     }
//     res.status(201).json({ message: 'Feedback submitted successfully' });
//   });
// };

// // Get all feedback
// const getFeedback = (req, res) => {
//   const query = 'SELECT * FROM feedback';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching feedback:', err);
//       return res.status(500).json({ error: 'Failed to fetch feedback' });
//     }
//     res.status(200).json(results);
//   });
// };

// module.exports = { submitFeedback, getFeedback };
