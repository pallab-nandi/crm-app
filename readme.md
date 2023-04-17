<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN58Pty1amh06QAYe5KjP58w7q0BS60pi7VYCryWqNyJ0Gwb67oisxJKYbre0gOQUjDUrJDw04CoHiVX-_JezdHN-KwJ9vSCZrEMjQiMPEc8zGBBKGCMookD0pHZ7KLxRqCMX6tQPSMnduSj1ZaXl34eYUO9B2x0zK7fcoLKGlZ0qCYE32POLsV-Lf5g/s16000/CRM.png"></div>
<br>

<h1 align="center">CRM Application</h1>
<p align="center">
    <strong><u>Description</u></strong>
    <br>A Project on CRM Back-End System<br>
    <b>Project Title : </b>CRM Application<br>
    <b>Project by : </b><a href="https://github.com/pallab-nandi">Pallab Nandi</a>
</p>
<br/>

# About
This is a backend application that provides RESTful APIs for user authentication, data management and email notification. It is built with Node.js, Express.js, JWT, MongoDB, Mongoose and Nodemailer.

## Features

- User registration and login with JWT authentication
- CRUD operations for user and ticket data with MongoDB and Mongoose
- Email notification system with Nodemailer and SMTP
- Error handling and validation with Express middleware
- Testing with POSTMAN

<br><br>

# API Documentation



## Tickets



### 1. GetAllTickets


Fetch all tickets


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tickets
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



### 2. GetTicketById


Fetch Ticket by Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tickets/643d365d8a9291fbe5f13de9
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



### 3. createTicket


Create a new ticket


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/tickets
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



***Body:***

```js        
{
    "title" : "Can't open the course library",
    "description" : "I am not able to open the course library for study"
}
```



### 4. updateTicket


Update specific ticket


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/tickets/643d365d8a9291fbe5f13de9
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



***Body:***

```js        
{
    "ticketPriority" : 1,
    "status" : "IN_PROGRESS"
}
```



## Users



### 1. GetAllUsers


Fetch all available users


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



### 2. GetUserById


Fetch User according as Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/643d2c6e2352db616306a637
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



### 3. addUser


Add new user to database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



***Body:***

```js        
{
    "name" : "test",
    "email" : "rideweg551@fitzola.com",
    "password" : "test",
    "userId" : "test"
}
```



### 4. updateUser


Update specific user


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/643d2c6e2352db616306a637
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



***Body:***

```js        
{
    "userStatus" : "APPROVED"
}
```



### 5. deleteUser


Delete specific user according as user ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/users/643d2fadb71c08c1a7aa038e
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2QzNDI1MjRlODgxZjllYTViZGY2ZiIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MTczMjY3MCwiZXhwIjoxNjgxODE5MDcwfQ.maZdzTngoMBnFXME3B7WlRQ5V8uTf7WonjutaKWCJOM |  |



## Auth



### 1. SignUp


Register new user to the system


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/signup
```



***Body:***

```js        
{
    "name" : "Pallab Nandi",
    "email" : "pallab@nandi.com",
    "userId" : "pallab",
    "password" : "test",
    "userType" : "ENGINEER"
}
```



### 2. LogIn


SignIn for exisiting user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/signin
```



***Body:***

```js        
{
    "userId" : "admin",
    "password" : "admin@00"
}
```


<br><br>

# Project Version

The current version of the application is `v1.0.0`