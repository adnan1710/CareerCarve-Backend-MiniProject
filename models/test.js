const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [
        {
            question: {
                type: String,
                required: true
            },
            options: [
                {
                    type: String,
                    required: true
                }
            ],
            correctAnswers: [
                {
                    type: String,
                    required: true
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Test', testSchema);
