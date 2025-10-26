import React from 'react';

const About = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    bio,
    address = {},
    phone,
    email,
    resumedownload
  } = data;

  const profilepic = `images/${image}`;
  const { street, city, state, zip } = address;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          <div className="profile-section">
            <div className="profile-pic-container">
              <img 
                className="profile-pic" 
                src={profilepic} 
                alt={`${name || 'Jyotiprakash'} Profile Picture`}
                loading="lazy"
              />
              <div className="profile-overlay">
                <div className="overlay-content">
                  <h3>{name || 'Jyotiprakash'}</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-section">
            <h1 className="section-title">About Me</h1>
            <div className="title-decoration"></div>
            <p className="bio-text">{bio}</p>
            
            {/* Skills Tags */}
            <div className="skills-container">
              <h3 className='skills-title'>What I Do</h3>
              <div className="skill-tags">
                <span className="skill-tag">React Development</span>
                <span className="skill-tag">Mobile Apps</span>
                <span className="skill-tag">JavaScript/TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          
          {/* Contact Information Card */}
          <div className="info-card contact-card">
            <div className="card-header">
              <h3>Contact Information</h3>
              <div className="header-line"></div>
            </div>
            <div className="contact-items">
              <div className="contact-item">
             
                  <i className="fa fa-user"></i>
             
                <div className="contact-details">
                  <span className="contact-label">Name</span>
                  <span className="contact-value">{name || 'Jyotiprakash'}</span>
                </div>
              </div>
              
              {street && (
                <div className="contact-item">
               
                    <i className="fa fa-map-marker"></i>
                  
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">
                      {street}<br />
                      {city} {state}, {zip}
                    </span>
                  </div>
                </div>
              )}
              
              {phone && (
                <div className="contact-item">
                
                    <i className="fa fa-phone"></i>
                  
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{phone}</span>
                  </div>
                </div>
              )}
              
              {email && (
                <div className="contact-item">
                 
                    <i className="fa fa-envelope"></i>
                  
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{email}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Experience & Resume Card */}
          <div className="info-card resume-card">
            <div className="card-header">
              <h3>Professional Experience</h3>
              <div className="header-line"></div>
            </div>
            
            {/* Quick Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="resume-section">
              <p>Download my resume to learn more about my experience and skills.</p>
              {resumedownload ? (
                <a 
                  href={resumedownload} 
                  className="resume-btn primary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
              ) : (
                <button className="resume-btn disabled-btn" disabled>
                  <i className="fa fa-file-pdf-o"></i>
                  Resume Coming Soon
                </button>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
