const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
    username: {
          type: String,
          required: true,
          min: 3,
          max: 20,
          unique: true
        },
    email: {
          type: String,
          required: true,
          max: 50,
          unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    // profilePicture: {
    //     type: String,
    //     default: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"
    // },
    // coverPicture: {
    //     type: String,
    //     default: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"
    // },
    // followers: {
    //     type: Array,
    //     default: []
    // },
    // followings: {
    //     type: Array,
    //     default: []
    // },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    // desc: {
    //     type: String,
    //     max: 50
    // },
    // city: {
    //     type: String,
    //     max: 50
    // },
    // from: {
    //     type: String,
    //     max: 50
    // },
    // relationship: {
    //     type: String,
    //     enum: [1,2,3],
    // },
},
    // {
    //     timestamps: true
    // }
) 

module.exports = model("User", UserSchema)