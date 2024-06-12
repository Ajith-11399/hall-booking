# Node.js CRUD - Operations Task

This project is a simple Node.js application that provides CRUD operations for managing users and room bookings. It utilizes Express for the server framework.

## Project Description

This Node.js application provides functionality for creating users, creating rooms, booking rooms, and retrieving data related to users and room bookings. It demonstrates the implementation of CRUD operations in a RESTful API.

## Files Structure

- **userController.js**: Contains the controller functions for handling user and room-related operations.
- **userRouter.js**: Defines the routes for different CRUD operations.
- **index.js**: Main entry point of the application.
- **users.js**: Data file containing initial user and room booking information.

## Tools and Libraries Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **body-parser**: Middleware for parsing request bodies.

## Operations

1. **Home**: Displays a welcome message.
2. **Get All User**: Displays all customers' Data.
3. **Create A Room**: Create a room.
4. **Book A Room**: Books a room.
5. **Get All Booked Rooms**: Retrieves All of the Booked Rooms.
6. **Get All Booked Customers**: Retrieves All of the customers who booked the Rooms.
7. **Get Room Booking Count**: Retrieves the rooms booked by each customers.

## Routes

| **Routes**                                                               | **Method** | **Endpoint**   | **Description**                                      |
| ------------------------------------------------------------------------ | ---------- | -------------- | ---------------------------------------------------- |
| <a href="https://hall-booking-7bjp.onrender.com/">Home</a>               | `GET`      | `/`            | Displays a welcome message.                          |
| <a href="https://hall-booking-7bjp.onrender.com/users">Create</a>        | `GET`      | `/users`       | Displays all customers' Data.                        |
| <a href="https://hall-booking-7bjp.onrender.com/create-room">Files</a>   | `POST`     | `/create-room` | Create a room.                                       |
| <a href="https://hall-booking-7bjp.onrender.com/book-room">Files</a>     | `POST`     | `/book-room`   | Books a room.                                        |
| <a href="https://hall-booking-7bjp.onrender.com//booked">Files</a>       | `GET`      | `//booked`     | Retrieves All of the Booked Rooms.                   |
| <a href="https://hall-booking-7bjp.onrender.com/customers">Files</a>     | `GET`      | `/customers`   | Retrieves All of the customers who booked the Rooms. |
| <a href="https://hall-booking-7bjp.onrender.com/booking-count">Files</a> | `GET`      | `/files`       | Retrieves the rooms booked by each customers.        |

## License

> This repository is owned by
> <a href="https://github.com/Ajith-11399/">AJ</a>

## Backend Source Link

> Nodejs CRUD Operations Task<a href="https://hall-booking-7bjp.onrender.com/">View Task</a>

## API DOcumentation - POSTMAN API

> Here is the API documentation of Nodejs Filesystem - Current Timestamps Task
> <a href="https://documenter.getpostman.com/view/35036950/2sA3XPC2nA">View Documentation</a>
