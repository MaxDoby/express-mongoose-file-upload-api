# Express Mongoose File Upload API

Small Node.js API for practicing Express, MongoDB/Mongoose CRUD operations, and image upload.

## Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- express-fileupload
- dotenv

## Features

- Create posts with image upload
- Get all posts
- Get one post by id
- Update a post by id
- Delete a post by id
- Serve uploaded files from the `static` folder

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example`:

```bash
DB_URL=your_mongodb_connection_string
```

Start the server:

```bash
npm start
```

For development with auto-restart:

```bash
npm run dev
```

## API Routes

Base URL:

```txt
http://localhost:5000/api
```

Routes:

```txt
POST   /posts
GET    /posts
GET    /posts/id/:id
PUT    /posts/id/:id
DELETE /posts/id/:id
```

## Upload Notes

`POST /posts` expects multipart form data with:

- `author`
- `title`
- `content`
- `picture`

Uploaded files are saved in the `static` folder.
