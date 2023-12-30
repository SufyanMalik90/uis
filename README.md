## Getting Started

Running the Project
To start the project, run:

## yarn start
this will run all API

Running the Asynchronous Script

## yarn async

Running the File Read Script

## yarn fileread


Endpoints

Create User
Endpoint: `POST /api/users`

Parameters:
name: User's name
email: User's email
password: User's password
isAdmin (optional): User's admin status (default is false)
create user POST = `http://localhost:3000/api/users`

Get All Users
Endpoint: `GET /api/users`

Login
Endpoint: `POST /api/login`
Parameters:
email: User's email
password: User's password

Update User
Endpoint: `PUT /api/users`
Parameters:
Bearer Token: JWT token obtained after login
Other user details you want to update

Delete User
Endpoint: `DELETE /api/users`
Parameters:
Bearer Token: JWT token obtained after login
