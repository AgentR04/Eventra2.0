# College Registration Backend

This is a backend API for college registration, sign-in, and sign-up using MongoDB, Express, and Node.js.

## Features

- User authentication (register, login, logout)
- College management
- User management
- Role-based access control
- Invitation system for college committees

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

3. Start the server:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `GET /api/auth/logout` - Logout user

### College Management

- `POST /api/college` - Create a new college
- `GET /api/college` - Get all colleges
- `GET /api/college/:code` - Get college by code
- `POST /api/college/invitation` - Create invitation code
- `GET /api/college/invitation/:code` - Verify invitation code

### User Management

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/committee/:committee` - Get users by committee
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

## Testing with Postman

To test your API endpoints using Postman:

1. **Install Postman**:
   - Download and install Postman from [postman.com](https://www.postman.com/downloads/)

2. **Set up a new Collection**:
   - Open Postman and create a new Collection named "College Registration API"

3. **Create requests for each endpoint**:

   **Register a new user**:
   - Method: POST
   - URL: http://localhost:5000/api/auth/register
   - Body (raw JSON):
     ```json
     {
       "name": "Test User",
       "email": "test@example.com",
       "phone": "1234567890",
       "password": "password123",
       "collegeCode": "ABC123"
     }
     ```

   **Login**:
   - Method: POST
   - URL: http://localhost:5000/api/auth/login
   - Body (raw JSON):
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```

   **Get Current User**:
   - Method: GET
   - URL: http://localhost:5000/api/auth/me?email=test@example.com

   **Create College**:
   - Method: POST
   - URL: http://localhost:5000/api/college
   - Body (raw JSON):
     ```json
     {
       "name": "Test College",
       "code": "ABC123",
       "address": "123 College St",
       "city": "Test City",
       "state": "Test State"
     }
     ```

4. **Testing workflow**:
   - First create a college
   - Then register a user with that college code
   - Login with the user credentials
   - Access protected routes by including the email in query parameters

## Integration with Frontend

To connect this backend with your React frontend:

1. Install axios in your frontend:
   ```
   npm install axios
   ```

2. Create an API service file to handle requests:
   ```javascript
   import axios from 'axios';

   const API_URL = 'http://localhost:5000/api';

   const api = axios.create({
     baseURL: API_URL
   });

   export const register = (userData) => api.post('/auth/register', userData);
   export const login = (credentials) => api.post('/auth/login', credentials);
   export const logout = () => api.get('/auth/logout');
   export const getCurrentUser = (email) => api.get(`/auth/me?email=${email}`);
   
   // Add more API methods as needed
   ```

3. Update your frontend components to use these API methods
