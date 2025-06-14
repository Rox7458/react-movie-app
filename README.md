# Movie Website

The website presents latest movies.

## Project Overview

This project showcases:

- Project let users view latest movies with details by registering or logging.

## Features

- **Content Sections:**
  - **Main:** Displays the movies.
  - **LogIn:** Displays logging to see the movie details.
  - **Register:** Basicly registering process.

## Project Skeleton

```
- Movie App (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

## Preview

Here’s a preview of the project in action:

![alt text](REC-20250614170938-ezgif.com-video-to-gif-converter.gif)

## Technologies Used

- **FIREBASE**: For logging.
- **TMDB_API**: For providing data.
- **TAILWIND**: For styling.
