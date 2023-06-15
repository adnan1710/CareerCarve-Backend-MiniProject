const mongoose = require('mongoose');

const dbConfig = {
    connect: () => {
        // Modify the connection URL with your own MongoDB connection string
        const connectionString = 'mongodb://adnan:Adnan123@localhost:27017/questionnaire';

        // Modify options as per your requirements (e.g., adding authentication, SSL, etc.)
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        };

        // Connect to the database
        mongoose
            .connect(connectionString, options)
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((error) => {
                console.error('Database connection error:', error);
            });
    }
};

module.exports = dbConfig;
