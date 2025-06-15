import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const userDetails = {
    name: "Alexandra Thompson",
    age: 28,
    dateOfBirth: "March 15, 1996",
    profession: "Senior Software Engineer",
    location: "San Francisco, CA",
    email: "alexandra.thompson@email.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate software engineer with 6+ years of experience in full-stack development. Specializes in React, Node.js, and cloud technologies. Loves solving complex problems and building scalable applications.",
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "MongoDB", "PostgreSQL"],
    experience: "6+ Years",
    education: "Master's in Computer Science",
    languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"],
    hobbies: ["Photography", "Hiking", "Reading", "Cooking", "Traveling"]
  };

  return (
    <div className="user-info">
      {/* Header Section */}
      <section className="user-header">
        <div className="container">
          <div className="user-profile">
            <div className="profile-image">
              <div className="avatar">
                <span>AT</span>
              </div>
              <div className="status-indicator"></div>
            </div>
            <div className="profile-details">
              <h1>{userDetails.name}</h1>
              <p className="profession">{userDetails.profession}</p>
              <p className="location">📍 {userDetails.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="user-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column */}
            <div className="left-column">
              {/* Personal Information */}
              <div className="info-card">
                <h3>Personal Information</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="label">Full Name:</span>
                    <span className="value">{userDetails.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Age:</span>
                    <span className="value">{userDetails.age} years old</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Date of Birth:</span>
                    <span className="value">{userDetails.dateOfBirth}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Email:</span>
                    <span className="value">{userDetails.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Phone:</span>
                    <span className="value">{userDetails.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Location:</span>
                    <span className="value">{userDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="info-card">
                <h3>Professional Details</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="label">Profession:</span>
                    <span className="value">{userDetails.profession}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Experience:</span>
                    <span className="value">{userDetails.experience}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Education:</span>
                    <span className="value">{userDetails.education}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="info-card">
                <h3>Languages</h3>
                <div className="tags">
                  {userDetails.languages.map((language, index) => (
                    <span key={index} className="tag language-tag">{language}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Bio */}
              <div className="info-card">
                <h3>About Me</h3>
                <p className="bio">{userDetails.bio}</p>
              </div>

              {/* Skills */}
              <div className="info-card">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  {userDetails.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div className="info-card">
                <h3>Hobbies & Interests</h3>
                <div className="hobbies-list">
                  {userDetails.hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-item">
                      <span className="hobby-icon">🎯</span>
                      <span>{hobby}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="info-card">
                <h3>Get In Touch</h3>
                <div className="contact-actions">
                  <button className="btn-contact-primary">Send Message</button>
                  <button className="btn-contact-secondary">Schedule Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;