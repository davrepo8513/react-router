import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to TechHub</h1>
              <p className="hero-subtitle">
                Your gateway to innovative technology solutions and digital transformation
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="tech-illustration">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Development</h3>
              <p>Rapid prototyping and development with cutting-edge technologies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Solutions</h3>
              <p>Enterprise-grade security with best practices implementation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach ensuring perfect experience across all devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized solutions for maximum speed and efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's work together to bring your ideas to life</p>
          <button className="btn-cta">Contact Us Today</button>
        </div>
      </section>
    </div>
  );
};

export default Home;