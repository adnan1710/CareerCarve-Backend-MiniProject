const express = require('express');
const app = express();
const dbConfig = require('./database/dbConfig').default;

// Connect to the database
dbConfig.connect();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Load routes
const welcomeRoutes = require('./routes/welcomeRoutes');
const userRoutes = require('./routes/userRoutes').default;
const testRoutes = require('./routes/testRoutes').default;

// Register routes
app.use('/api/welcome', welcomeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/test', testRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
