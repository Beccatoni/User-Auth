const User = require('../models/user.models');
const bcrypt = require('bcrypt');

// User registration
const registration = async (req,res) => {
    try {
        // generate new password
        const salt = await  bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user account
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });

        // save user account
        const user = await  newUser.save();
        res.status(200).json(
            {message: "User account created  successfully!",
             user: user
            });
        } 
        catch (err) {
        res.status(500).json(err);
    }
}

// user login 


module.exports = {
    registration
}