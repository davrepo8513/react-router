import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          {/* 404 Animation */}
          <div className="error-animation">
            <div className="error-number">
              <span className="four">4</span>
              <span className="zero">0</span>
              <span className="four">4</span>
            </div>
            <div className="floating-elements">
              <div className="element element-1">💫</div>
              <div className="element element-2">⭐</div>
              <div className="element element-3">✨</div>
              <div className="element element-4">🌟</div>
            </div>
          </div>

          {/* Error Message */}
          <div className="error-message">
            <h1>Oops! Page Not Found</h1>
            <p className="error-description">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best explorers sometimes take a wrong turn!
            </p>
          </div>

          {/* Suggestions */}
          <div className="suggestions">
            <h3>Here's what you can do:</h3>
            <ul className="suggestion-list">
              <li>
                <span className="suggestion-icon">🏠</span>
                <span>Go back to our <Link to="/" className="suggestion-link">Homepage</Link></span>
              </li>
              <li>
                <span className="suggestion-icon">ℹ️</span>
                <span>Learn more <Link to="/about" className="suggestion-link">About Us</Link></span>
              </li>
              <li>
                <span className="suggestion-icon">👤</span>
                <span>Check out our <Link to="/user-info" className="suggestion-link">User Info</Link></span>
              </li>
              <li>
                <span className="suggestion-icon">🔍</span>
                <span>Double-check the URL for any typos</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              Take Me Home
            </Link>
            <button 
              className="btn-secondary" 
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>

          {/* Fun Fact */}
          <div className="fun-fact">
            <div className="fact-icon">💡</div>
            <p>
              <strong>Fun Fact:</strong> The term "404 error" comes from the room number 
              at CERN where the original web servers were located. When a page couldn't 
              be found, it was literally "not found in room 404"!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;