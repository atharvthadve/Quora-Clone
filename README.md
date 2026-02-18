# REST APIs Project

This project is a simple REST API built using Node.js and Express.js. It demonstrates the creation of routes, serving static files, and rendering dynamic views using EJS.

## Features

- **Dynamic Views**: Uses EJS templates to render dynamic content.
- **Static File Serving**: Serves CSS and JavaScript files from the `public` directory.
- **CRUD Operations**: Implements basic Create, Read, and View operations for posts.

## Project Structure

```
REST APIs/
├── index.js          # Main server file
├── package.json      # Project metadata and dependencies
├── public/           # Static files (CSS, JS, etc.)
│   ├── detail.css    # Styles for detailed views
│   └── ...
├── views/            # EJS templates
│   ├── detail.ejs    # Template for detailed post view
│   ├── index.ejs     # Template for listing posts
│   ├── newpost.ejs   # Template for creating a new post
│   └── error.ejs     # Template for error handling
└── .gitignore        # Git ignore file
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd REST APIs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   nodemon index.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:2100
   ```

## Endpoints

- `GET /posts` - View all posts.
- `GET /posts/new` - Form to create a new post.
- `POST /posts` - Add a new post.
- `GET /posts/:id` - View a specific post by ID.

## Dependencies

- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for rendering dynamic views.
- **UUID**: For generating unique IDs for posts.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Happy coding! 🚀
