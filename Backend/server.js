// server.js

const express = require('express');
const app = express();
const db = require('./config/db'); // Import the db object, not a function

const authRoutes = require('./routes/authRoutes');
// const issueRoutes = require('./routes/issueRoutes');
// const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(express.json());

// Route middleware
app.use('/api/auth', authRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/feedback', feedbackRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
