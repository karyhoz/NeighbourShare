# Contributors and Assigned Tasks

This document lists all the contributors to the NeighborShare project and the tasks or components they are currently working on.

## Team Members

| Name                 | GitHub Username | Assigned Task                | Branch Name           |
|----------------------|-----------------|------------------------------|-----------------------|
| Monday Chimaobi Julius | @mondayjulius    | Backend Authentication       | `auth-feature`        |


## How to Update Your Status
1. **Update the table** with the task you're working on and your branch name.
2. **Create a pull request** once you're ready to merge your changes.

### Guidelines
- Ensure your branch name reflects the task you're working on.
- Update your task status regularly in this document.
- Communicate with the team in case of any blockers or issues.
===================================================================================================

# NeighborShare

NeighborShare is a web application designed to facilitate the sharing of resources among neighbors. This document provides instructions on how to get started with the project.

## Project Structure

### Backend
- **config/**: Configuration files for authentication, database, etc.
- **controllers/**: Contains the logic for handling requests.
- **models/**: Mongoose models for MongoDB.
- **routes/**: Defines the API endpoints.
- **middleware/**: Custom middleware functions.
- **app.js**: Main application file.
- **package.json**: Contains backend dependencies.

### Frontend
- **public/**: Static files and main `index.html`.
- **src/**: Contains React components, pages, services, and the main application file.
- **package.json**: Contains frontend dependencies.
- **vite.config.js**: Configuration file for Vite.

## Getting Started

### Cloning the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/JuliusMonday/NeighbourShare.git
cd NeighborShare
