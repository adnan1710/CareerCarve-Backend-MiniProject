const Test = require('../models/test');

exports.submitTest = async (req, res) => {
    const { userId, testId, responses } = req.body;

    try {
        const test = await Test.findById(testId);

        if (!test) {
            return res.status(404).json({
                success: false,
                message: "Test not found"
            });
        }

        let score = 0;

        test.questions.forEach((question, index) => {
            const selectedOptions = responses[index];

            if (selectedOptions.length === question.correctAnswers.length) {
                const allCorrect = selectedOptions.every(option => question.correctAnswers.includes(option));

                if (allCorrect) {
                    score++;
                }
            }
        });

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
