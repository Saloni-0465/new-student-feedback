import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import issueRoutes from './routes/issueRoutes.js'
 
import { connectDB } from './config/db.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Student Feedback System');
});

// Authentication Routes
app.use('/student', studentRoutes);
app.use('/admin',adminRoutes);
app.use('/issue',issueRoutes)

// Connecting to the Database (Optional)
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});


