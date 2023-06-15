const mongoose = require('mongoose');

const dbConfig = {
    connect: () => {
        // Connection URL
        const connectionString = 'mongodb://adnan:Adnan123@localhost:27017/questionnaire';

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        };

        // Connect to the database
        mongoose.connect(connectionString, options)
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((error) => {
                console.error('Database connection error:', error);
            });
    }
};

module.exports = {
    connect: connect
};