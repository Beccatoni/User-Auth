const express = require('express');
const userRoutes = express.Router();
const { updateUser } = require('../controllers/user.controllers');


userRoutes.put('/updateUser/:id', updateUser);



module.exports = {
    userRoutes
}

