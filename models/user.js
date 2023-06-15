const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    testResponses: [
        {
            testId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Test',
                required: true
            },
            responses: [String],
            score: Number
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
