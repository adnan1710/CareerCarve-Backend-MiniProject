exports.getWelcomeMessage = (req, res) => {
    res.status(200).json({
        success: true,
        message: "API successfully called"
    });
};
