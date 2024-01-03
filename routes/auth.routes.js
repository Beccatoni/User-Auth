const express = require('express');
const { registration } = require('../controllers/auth.controllers');
const authRoutes = express.Router();


authRoutes.post('/register', registration );


module.exports = authRoutes;