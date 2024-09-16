const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const db = require('../config/db'); // Ensure this is the correct path to your database connection file
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Check if the user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database query error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert new user into the database
            db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', 
                [name, email, hashedPassword, role],
                async (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ message: 'Database insert error' });
                    }

                    // Create transporter for sending email
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD }
                    });

                    // Email options
                    const mailOptions = {
                        from: process.env.EMAIL_USER,
                        to: email,
                        subject: 'Welcome to the system',
                        text: 'Thank you for registering. Your account has been created successfully.' // Modify as needed
                    };

                    // Send the email
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error);
                            return res.status(500).json({ message: 'Failed to send welcome email' });
                        }
                        res.status(201).json({ message: 'User registered successfully. A welcome email has been sent.' });
                    });
                }
            );
        } catch (error) {
            res.status(500).json({ message: 'Error registering user' });
        }
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database query error' });
        }
        if (result.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const user = result[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    });
};

// Email verification logic is not required as per the current schema
