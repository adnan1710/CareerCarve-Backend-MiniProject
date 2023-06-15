# API Endpoints

## 1. Simple Request Response Endpoint

### GET /api/welcome

- Description: A simple request response endpoint.
- Success Response:
  - Status Code: 200
  - Body:

    ```json
    {
      "success": true,
      "message": "API successfully called"
    }
    ```

## 2. Sign Up Endpoint

### POST /api/signup

- Description: Sign up endpoint for user registration.
- Request Body:

    ```json
    {
      "name": "Md. Adnan Akhtar",
      "email": "adnanakhtar1710@gmail.com",
      "password": "example@123",
      "phone_number": "+919211100323"
    }
    ```

- Response Body:

    ``` json
    {
      "success": true,
      "message": "Signed up successfully"
    }

- Note: The password should be stored in an encrypted format.

## 3. Sign In Endpoint

### POST /api/login

- Description: Sign in endpoint for user authentication.
- Request Body:

    ```json
    {
      "email": "<adnanakhtar1710@gmail.com>",
      "password": "example@123"
    }
    ```

- Response Body:

    ```json

    {
      "success": true,
      "message": "hewwo"
    }
    ```

- Note: The "message" string is obtained by calling the API endpoint <https://api.catboys.com/catboy>.

## 4. Edit/Add Phone Number Endpoint

### PUT /api/edit/phonenumber

- Description: Allows the user to edit or add their phone number.
- Request Body:

  ```json

    {
      "phone_number": "+919211100323"
    }
    ```

- Request Headers:
  - authToken: [authentication token]
- Response Body:

  ```json

    {
      "success": true,
      "message": "Phone number changed / added successfully"
    }
    ```

- Note: This request should be performed while the user is logged in by passing the authentication token in the request headers.
