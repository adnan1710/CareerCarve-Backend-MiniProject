# Questionnaire API

**Backend Task**: Create REST API for a questionnaire using Node.js and a database of your choice. (Used Mongodb). This project is a task given by CareerCarve in their Internship Cum PPO Recruitment Drive.

This is a questionnaire API built using Node.js that allows users to choose and complete tests from a selection of available tests. It provides endpoints for user registration, login, submitting tests, and managing user details.

## Features

- User registration and login
- Submitting tests with user responses
- Storing test responses and calculating scores
- Test and question details can be hardcoded in the database
- Enforcing that a user can only take a test once

## Installation

1. Clone the repository: git clone `https://github.com/adnan1710/CareerCarve-Backend-MiniProject.git`
2. Install the dependencies: `npm install`

## Usage

1. Set up the database connection by modifying the `database/dbConfig.js` file.
2. Start the application: `npm start`
3. Access the API at: `http://localhost:3000`

## Endpoints

The following endpoints are available in the API:

- [POST] /api/signup - Sign up a new user.
- [POST] /api/login - User login.
- [PUT] /api/edit/phonenumber - Edit or add a user's phone number.
- [POST] /api/submit-test - Submit a test with user responses.

Please refer to the [API documentation](API.md) for detailed information about each endpoint, including request and response examples.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcrypt.js (for password encryption)
- JSON Web Tokens (JWT) for authentication
