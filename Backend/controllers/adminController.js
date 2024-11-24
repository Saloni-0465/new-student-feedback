import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  {prismaClient}  from '../config/db.js';

const prisma = prismaClient;

const signup = async (req, res) => {
    const { fullName, email, password, role } = req.body;

    try {
        const existingUser = await prisma.admin.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.admin.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                role,
            },
        });

        res.status(201).json({ message: 'Admin created successfully', user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login route handler
const login = async (req, res) => {
    const { email, password, role} = req.body;

    try {
        const user = await prisma.admin.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        if (role !== 'ADMIN'){
            return res.status(401).json({ message : "Invalid Credintials for Student role"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Admin logged in successfully", token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
};

export { signup, login };
