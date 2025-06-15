import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About TechHub</h1>
          <p>Pioneering the future of technology with innovative solutions</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2019, TechHub emerged from a simple yet powerful vision: to bridge the gap 
                between cutting-edge technology and real-world business solutions. What started as a 
                small team of passionate developers has grown into a comprehensive technology partner 
                for businesses worldwide.
              </p>
              <p>
                We believe that technology should empower, not complicate. Our journey has been marked 
                by continuous learning, adaptation, and an unwavering commitment to delivering excellence 
                in every project we undertake.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>📈</span>
                  <p>Growth & Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation while maintaining the highest standards 
                of quality and customer satisfaction.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner that businesses trust for their digital 
                transformation journey, creating a future where technology seamlessly integrates 
                with human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Constantly pushing boundaries and exploring new possibilities</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Working together to achieve extraordinary results</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>Delivering nothing less than the highest quality in everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔄</div>
              <h4>Adaptability</h4>
              <p>Embracing change and evolving with the dynamic tech landscape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <span>👨‍💻</span>
              </div>
              <h4>Alex Johnson</h4>
              <p className="role">CEO & Founder</p>
              <p className="bio">Visionary leader with 10+ years in tech industry</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span>👩‍💻</span>
              </div>
              <h4>Sarah Chen</h4>
              <p className="role">CTO</p>
              <p className="bio">Technical expert specializing in scalable architectures</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span>👨‍🎨</span>
              </div>
              <h4>Mike Rodriguez</h4>
              <p className="role">Lead Designer</p>
              <p className="bio">Creative mind behind our stunning user experiences</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span>👩‍💼</span>
              </div>
              <h4>Emily Davis</h4>
              <p className="role">Project Manager</p>
              <p className="bio">Ensuring seamless project delivery and client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help transform your business</p>
          <button className="btn-contact">Get In Touch</button>
        </div>
      </section>
    </div>
  );
};

export default About;