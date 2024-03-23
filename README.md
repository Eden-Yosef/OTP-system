# OTP System 🔑

🔨 ## Development of a project from scratch for user registration and login using a one-time password (OTP) sent to email. Node.js server-side, React client-side, and MySQL Database.

In order to properly log in to the system, users must first register and then log in with the email they registered with. Afterward, they will receive a code to their email with a validity of 5 minutes, which they must enter during the login process.

🌐 ## Overview

The project consists of code divided into two main components:

Node.js Server: Embeds the application logic and operates as the request server. The server defines the API endpoints.
MySQL Database: Stores the required information such as user details.

📦 ## Installation

1. **Install Dependencies**: Run the following command to install all required dependencies:
    ```bash
npm install
```
2. **Set Environment Variables**: Edit the `.env` file and define your database connection details and any required settings.

3. **Run the Server**: Once everything is set up correctly, run the following command to start the server:

    ```bash
node index.js
```
The project provides authentication using OTP codes sent to the user's email upon registration.

## Support

If you have any questions or issues, feel free to reach out. 😊

