const Test = require('../models/test');
const UserTest = require('../models/userTest');

exports.submitTest = async (req, res) => {
    const { userId, testId, responses } = req.body;

    try {

        // Store the testid
        const test = Test[testId];

        if (!test) {
            return res.status(404).json({
                success: false,
                message: "Test not found"
            });
        }

        // Check if the user has already taken the test
        const existingUserTest = await UserTest.findOne({ userId, testId });
        if (existingUserTest) {
            return res.status(400).json({
                success: false,
                message: "User has already taken the test"
            });
        }

        // Retrieve the questions from file
        const questions = await Test.findOne({ _id: testId });
        if (!questions) {
            return res.status(404).json({
                success: false,
                message: "Questions not found"
            });
        }

        let score = 0;

        questions.forEach((question, index) => {
            const selectedOptions = responses[index];

            if (selectedOptions.length === question.correctAnswers.length) {
                const allCorrect = selectedOptions.every(option => question.correctAnswers.includes(option));

                if (allCorrect) {
                    score++;
                }
            }
        });

        // Save user's test response
        const userTest = new UserTest({
            userId,
            testId,
            responses,
            score
        });
        await userTest.save();

        res.status(200).json({
            userId,
            testId,
            score
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error submitting the test"
        });
    }
};
