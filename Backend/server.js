import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import db from './config/db.js'; // Importing the database connection

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Student Feedback System');
});

// Authentication Routes
app.use('/auth', authRoutes);

// Connecting to the Database (Optional)
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
