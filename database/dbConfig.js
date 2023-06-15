import { connect as _connect } from 'mongoose';

const dbConfig = {
    connect: () => {
        // Connection URL
        const connectionString = 'mongodb://localhost:27017/mydatabase';

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

export default dbConfig;
