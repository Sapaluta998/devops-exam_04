# Activity Logger - DevOps Project

A web application for recording and managing activities, built as part of the DevOps course assignment.

## Features

- Record activities with title and description
- View all registered activities
- Delete activities
- RESTful API endpoints
- Containerized with Docker
- CI/CD pipeline with GitHub Actions

## Project Structure

```
.
├── app.js                      # Main Express application
├── package.json                # Node.js dependencies
├── Dockerfile                  # Docker container configuration
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/
│   └── index.html              # Web interface
└── README.md                   # This file
```

## Prerequisites

- Node.js 16+
- Docker
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sapaluta998/devops-exam_04.git
cd devops-exam_04
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the application:
```bash
npm start
```

Access the application at `http://localhost:3000`

## Docker Usage

Build the image:
```bash
docker build -t activity-logger .
```

Run the container:
```bash
docker run -d -p 3000:3000 activity-logger
```

## API Endpoints

- `GET /` - Web interface
- `GET /api/activities` - Get all activities
- `POST /api/activities` - Add new activity
- `DELETE /api/activities/:id` - Delete activity

## CI/CD Pipeline

The GitHub Actions workflow (`deploy.yml`) automatically:
- Runs on push to `main` or `staging` branches
- Installs dependencies
- Runs tests
- Builds Docker image
- Tests the Docker image

## Author

Nicholas Bastek

## Course

PLTC (Polytechnic Lanna Chiangmai) - IT5102 (DevOps)
