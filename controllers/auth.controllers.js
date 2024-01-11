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
        const user = await newUser.save();
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
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(404).json("Wrong password");

        res.status(200).json({
            message: "User login successful",
            user: user
        })
    } catch(err){
        res.status(500).json(err)
    }
}


// Resetting the password
const ForgotPassword = async (req, res, next) => {
    try {
        const validUser = await UserModel.findOne({ email: req.body.email });

        if (!validUser) return next(errorHandler(401,  "Invalid email!" ));
        
        var token = jwt.sign({email:req.body}, process.env.JWT_SECRET_KEY, {expiresIn: 1200});

        var recoveryLink = `http://localhost:3000/reset-password/${token}/${validUser._id}`;

        sendEmail(validUser.email, 'Reset Pasword', recoveryLink);

        res.status(200).json({message:'Password reset link sent to your email!'});
    } catch (error) {
        next(errorHandler(500, error.message));
    }
}

module.exports = {
    registration,
    login,
    ForgotPassword
}