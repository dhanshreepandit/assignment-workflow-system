# Assignment Workflow System

## Project Overview
Backend system to manage assignments, submissions, and deadlines.

## Setup Instructions
npm install
npx nodemon app.js

## Features
Create, read assignments
Submit assignments before deadline
Prevent late submissions
Track submissions
REST API with MongoDB

## API Endpoints
POST /assignments
GET /assignments
GET /assignments/:id
POST /assignments/:id/submit
GET /assignments/:id/submissions

## Tech Stack
Node.js, Express.js, MongoDB
