import { Schema, model } from 'mongoose';

const testSchema = new Schema({
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

export default model('Test', testSchema);
