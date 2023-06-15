const mongoose = require('mongoose');

const connect = async () => {
    try {
        // Modify the connection URL with your own MongoDB connection string
        const connectionString = 'mongodb://localhost:27017mongodb+srv://adnan:OIrLLu8gtDgXnNtj@project.l2fiqld.mongodb.net/?retryWrites=true&w=majority';

        // Modify options as per your requirements (e.g., adding authentication, SSL, etc.)
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Connect to the database
        await mongoose.connect(connectionString, options);

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Please specify a valid database connection string. Connection error:', error);
    }
};

module.exports = connect;
