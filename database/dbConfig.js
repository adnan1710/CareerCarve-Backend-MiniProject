const mongoose = require('mongoose');

const dbConfig = {
    connect: () => {
        // Modify the connection URL with your own MongoDB connection string
        const connectionString = 'mongodb://adnan:Adnan123@localhost:27017/questionnaire';

        // Modify options as per your requirements (e.g., adding authentication, SSL, etc.)
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Connect to the database
        const connectionPromise = mongoose.connect(connectionString, options);

        connectionPromise
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((error) => {
                console.error('Database connection error:', error);
            });

        // Return a promise that resolves when the connection is successful or rejects with an error message
        return new Promise((resolve, reject) => {
            connectionPromise.then(resolve).catch(() => {
                reject('Please specify a valid database connection string');
            });
        });
    }
};

module.exports = dbConfig;
