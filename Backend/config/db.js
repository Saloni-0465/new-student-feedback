// db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create the MySQL connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

try {
    await db.connect();
    console.log('Connected to MySQL');
} catch (err) {
    console.error('Error connecting to MySQL:', err);
}

export default db;


