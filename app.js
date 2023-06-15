const express = require('express');
const app = express();
const dbConnect = require('./database/dbConfig');

// Connect to the database
dbConnect();

const User = require('./models/user');

// Example: Saving a new user
const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    phone_number: '1234567890'
});

newUser.save()
    .then((user) => {
        console.log('User saved:', user);
    })
    .catch((error) => {
        console.error('Error saving user:', error);
    });


// Middleware for parsing JSON request bodies
app.use(express.json());

// Load routes
const welcomeRoutes = require('./routes/welcomeRoutes');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');

// Register routes
app.use('/api/welcome', welcomeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/test', testRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
