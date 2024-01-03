const express = require('express');
const { registration, login } = require('../controllers/auth.controllers');
const authRoutes = express.Router();


authRoutes.post('/register', registration );// registration route

authRoutes.post('/login', login); // login route
module.exports = authRoutes;