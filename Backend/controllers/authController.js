const User = require("../models/User");
const bcrypt = require("bcryptjs");

// SIGNUP

const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "Signup Successful"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// LOGIN

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
    { id: user._id },
    "secretkey",
    { expiresIn: "1d" }
);

res.status(200).json({
    message: "Login Successful",
    token
});
        

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    signup,
    login
};
const jwt = require("jsonwebtoken");