// controllers/authController.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

// Register route handler
const signup = async (req, res) => {
    const { fullName, email, password, role } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Password strength validation (optional)
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                role,
            },
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login route handler
const login = async (req, res) => {
    const { email, password,role } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
};

// Export the controllers
export { signup, login };

// Optional: Gracefully disconnect Prisma on app shutdown
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});
