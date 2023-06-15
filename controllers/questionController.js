export async function submitTest(req, res) {
    const { userId, testId, answers } = req.body;

    try {
        // Check if the user has already taken the test
        const existingResponse = await testResponse.findOne({ userId, testId });

        if (existingResponse) {
            return res.status(400).json({
                success: false,
                message: "User has already taken the test"
            });
        }

        // Fetch the test details from the database based on the testId
        const test = await test.findById(testId);

        if (!test) {
            return res.status(404).json({
                success: false,
                message: "Test not found"
            });
        }

        let score = 0;

        // Calculate the score based on the user's answers
        for (const answer of answers) {
            const question = test.questions.find((q) => q._id.toString() === answer.questionId);

            if (!question) {
                continue;
            }

            // Check if the user's answer is correct
            const isCorrect = question.correctAnswers.includes(answer.selectedAnswer);

            if (isCorrect) {
                score++;
            }
        }

        // Store the user's response in the database
        const testResponse = new testResponse({
            userId,
            testId,
            answers
        });

        await testResponse.save();

        res.status(200).json({
            success: true,
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
}
