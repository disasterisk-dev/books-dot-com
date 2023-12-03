const User = require("../models/userModel");

//login user
const loginUser = async (req, res) => {
    res.json({ msg: "login user" });
};

//sign up user
const signupUser = async (req, res) => {
    res.json({ msg: "signup user" });
};

module.exports = {
    loginUser,
    signupUser,
};
