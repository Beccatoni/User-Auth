const User = require('../models/user.models');
const bcrypt = require('bcrypt');


// updating user

const updateUser = async (req, res, next) => {
    if (req.body.userId === req.query.id || req.body.isAdmin){
        if (req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.query.id, {
                $set: req.body,
            });
            res.status(200).json({
                message:"Account updated successfully",
                user: user});
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("Unauthorized: You can update only your account")
    }
}


module.exports = {
    updateUser
}