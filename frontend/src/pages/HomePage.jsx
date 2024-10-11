import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for the blur effect

const HomePage = () => {
  const [webtoons, setWebtoons] = useState([]);
  const [votes, setVotes] = useState({ manhwa: 0, anime: 0 });
  const [feedback, setFeedback] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    const fetchWebtoons = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/webtoons");
        setWebtoons(response.data);
      } catch (error) {
        console.error("Error fetching webtoons:", error);
        setErrorMessage("Failed to load webtoons. Please try again later.");
      }
    };

    fetchWebtoons();
  }, []);

  const handleVote = (type) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedbackSubmitted(true);
    setFeedback("");
  };

  return (
    <div className="homepage">
      <Navbar className="custom-navbar">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="/" className="navbar-brand">
            Animellange Toon
          </Navbar.Brand>
          <Form className="search-form">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-item">
          anime
        </Link>
        <span className="breadcrumb-separator"> &gt; </span>
        <Link to="/webtoons" className="breadcrumb-item">
          webtoons
        </Link>
        <span className="breadcrumb-separator"> &gt; </span>
        <span className="breadcrumb-item active">Top-5-WebToons</span>
      </div>

      <header className="header">
        <h1 className="header-title">Top 5 Webtoons You Must Read</h1>
      </header>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <nav className="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          {webtoons.map((webtoon, index) => (
            <li key={webtoon._id}>
              <a href={`#webtoon-${index + 1}`}>{webtoon.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="webtoons-section">
        {webtoons.map((webtoon, index) => (
          <div
            key={webtoon._id}
            id={`webtoon-${index + 1}`}
            className="webtoon-item"
          >
            <h2>{webtoon.title}</h2>
            <LazyLoadImage
              src={webtoon.imageUrl}
              alt={webtoon.title}
              effect="blur"
              className="webtoon-image"
            />
            <p>{webtoon.description}</p>
          </div>
        ))}
      </section>

      <div className="component-container">
        <section className="vote-section">
          <h2>Vote for Your Favorite</h2>
          <div className="vote-buttons">
            <button
              className="vote-button manhwa"
              onClick={() => handleVote("manhwa")}
            >
              Vote Manhwa
            </button>
            <button
              className="vote-button anime"
              onClick={() => handleVote("anime")}
            >
              Vote Anime
            </button>
          </div>
          <div className="vote-results">
            <p>Manhwa Votes: {votes.manhwa}</p>
            <p>Anime Votes: {votes.anime}</p>
          </div>
        </section>

        <section className="feedback-section">
          <h2>Feedback</h2>
          {!feedbackSubmitted ? (
            <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="feedback-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="feedback-input"
              />
              <textarea
                placeholder="Your feedback here..."
                rows="4"
                cols="50"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <h3 className="thank-you-message">Thank you for your feedback!</h3>
          )}
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Webtoons. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
