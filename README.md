Car Rental Reservation System Backend
This project implements a backend system for a car rental reservation service using TypeScript, Express.js, and MongoDB with Mongoose. It provides APIs for user authentication, car management, booking handling, and more.

Features
User Management
Sign Up: Register new users with roles as either 'user' or 'admin'.
Sign In: Authenticate users and provide JWT tokens for secure API access.
Car Management
Create Car: Admins can add new cars to the system with details such as name, description, color, features, and pricing.
Update Car: Admins can modify car details including color, features, and price per hour.
Delete Car: Soft delete cars from the system, marking them as unavailable for future bookings.
Get All Cars: Retrieve a list of all available cars, including their details.
Booking Management
Book a Ride: Users can book cars specifying the car ID, date, and start time.
Return the Car: Admins can mark a booked car as returned by specifying the booking ID and end time.
Get All Bookings: Admins can view all bookings, filterable by car ID and date.
Get User's Bookings: Users can view their booking history, including details of past rentals.
Error Handling
Comprehensive error handling with appropriate HTTP status codes and error messages.
Global error handling middleware to catch and format errors uniformly across the application.
Authentication & Authorization
JWT-based authentication to secure routes and ensure only authorized users (admins and users) can access relevant APIs.
Custom middleware for role-based access control ensuring admins have access to all functionalities while users are restricted to their own bookings.
Data Validation
Input validation using Zod to ensure data consistency and integrity.
Detailed error messages on validation failures for fields such as email, password, and booking details.
Bonus Features
Not Found Route: Handles requests to undefined routes with a generic "Not Found" response.
No Data Found: Returns a specific message when requested data is not found in the database.
Transaction & Rollback: Ensures data integrity during operations like booking and returning cars, with potential rollback on failure.
Technology Stack
Language: TypeScript
Framework: Express.js
Database: MongoDB with Mongoose
Validation: Zod
Authentication: JWT Tokens
Installation and Setup
Clone the repository.
Install dependencies: npm install.
Set up environment variables including MongoDB URI and JWT secret.
Start the server: npm start.
