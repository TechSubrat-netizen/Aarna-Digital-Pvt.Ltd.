import express from 'express';
import { signup, Login, getAdminById } from '../Controller/adminController.js';
import verifyToken from '../Middleware/authMiddlewaare.js';

const admin = express.Router();

// Public Routes
admin.post('/signup', signup);
admin.post('/signin', Login);

// Protected Routes
admin.get('/:id', verifyToken, getAdminById);

export default admin;