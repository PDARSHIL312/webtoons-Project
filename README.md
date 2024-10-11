# WEBTOONS-PROJECT

A single-page application (SPA) showcasing the **Top 5 Webtoons** from "The 50 Best Fantasy Manhwa You Must Read Now." Users can view webtoon details, vote on their favorite version (Manhwa vs Anime), provide feedback, and enjoy a responsive, optimized browsing experience.

## Features

- Displays the top 5 webtoons with their **title**, **image**, and **brief description**.
- **Vote Section**: Users can vote for their preferred version (Manhwa vs Anime) and see live results using AJAX.
- **Feedback Section**: Users can leave their feedback with name, email, and message.
- **Responsive Design** with optimized performance:
  - **Lazy loading** for images.
  - **Code minification**.
  - **Server-side rendering (SSR)** for improved performance.

## Tech Stack

- **Frontend**: React, Vite, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using MongoDB Atlas)
- **Cloudinary**: For image hosting
- **Tools**: Git, GitHub, VS Code

## Project Structure

```bash
WEBTOONS-PROJECT/
│
├── backend/
│   ├── controllers/
│   │   └── webtoonController.js  # Controller handling webtoon logic and image uploading
│   ├── models/
│   │   └── Webtoon.js            # Mongoose schema for webtoons
│   ├── routes/
│   │   └── webtoonRoutes.js      # API routes for fetching and voting on webtoons
│   ├── config/
│   │   └── cloudinary.js         # Cloudinary configuration for image uploading
│   ├── .env                      # Environment variables (MongoDB, Cloudinary keys)
│   ├── server.js                 # Entry point for the Express app
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WebtoonCard.jsx    # Reusable component for displaying each webtoon
│   │   │   ├── VoteSection.jsx    # Component for voting
│   │   │   └── FeedbackForm.jsx   # Component for feedback submission
│   │   ├── pages/
│   │   │   └── HomePage.jsx       # Main homepage for the app
│   │   ├── App.jsx                # Main React app
│   │   ├── index.js               # React entry point
│   │   └── styles/
│   │       └── HomePage.css       # CSS styling for the HomePage
│   ├── public/
│   │   └── index.html             # HTML file
│
├── .gitignore                     # Files to ignore in Git
├── README.md                      # Project documentation
└── package.json                   # Project dependencies and scripts


```



Installation

Backend Setup

1) Clone the repository:

git clone https://github.com/YOUR_USERNAME/WEBTOONS-PROJECT.git
cd WEBTOONS-PROJECT/backend

2) Install backend dependencies:
npm install

3)Create a .env file in the backend/ directory and add the following:
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
MONGODB_URI=your-mongodb-atlas-uri

4)Start the backend server:
npm start


=> Frontend Setup

1)Navigate to the frontend folder:
cd ../frontend

2)Install frontend dependencies:
npm install

3)Start the frontend server:
npm run dev


:: Usage
:Visit the homepage to view the top 5 webtoons.
:Click on each webtoon to see its title, image, and description.
Vote for your preferred version in the vote section.
Submit your feedback at the bottom of the page.
Optimization
:Lazy Loading: Images are lazy-loaded to improve performance.
Code Minification: JS/CSS minified during the build process.
Server-Side Rendering (SSR): Improves the initial load time and SEO.
API Endpoints
GET /api/webtoons: Fetch all webtoons.
