const User = require('../models/user');
const encryptionUtil = require('../utils/encryptionUtil');
const axios = require('axios');

exports.signup = async (req, res) => {
    const { name, email, password, phone_number } = req.body;

    try {
        const hashedPassword = await encryptionUtil.encryptPassword(password);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            phone_number
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "Signed up successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error signing up"
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await encryptionUtil.comparePasswords(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Make API call to https://api.catboys.com/catboy
        const response = await axios.get('https://api.catboys.com/catboy');
        const message = response.data.message;

        res.status(200).json({
            success: true,
            message: message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error logging in"
        });
    }
};

exports.editPhoneNumber = async (req, res) => {
    const { phone_number } = req.body;
    const userId = req.user.id;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Update the phone number
        user.phone_number = phone_number;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Phone number changed/added successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error editing phone number"
        });
    }
};
