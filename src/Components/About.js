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
    <section id="about">
      <div className="row">
        <div className="three columns">
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
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <div className="bio-content">
            <p>{bio}</p>
            
            {/* Skills highlight */}
            <div className="skills-highlight">
              <h4>What I Do</h4>
              <div className="skill-tags">
                <span className="skill-tag">React Development</span>
                <span className="skill-tag">Mobile Apps</span>
                <span className="skill-tag">JavaScript/TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">UI/UX Design</span>
              </div>
            </div>
          </div>

          <div className="row contact-row">
            <div className="eight columns contact-details">
              <h2>Contact Details</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fa fa-user"></i>
                  <span>{name || 'Jyotiprakash'}</span>
                </div>
                {street && (
                  <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <span>
                      {street}<br />
                      {city} {state}, {zip}
                    </span>
                  </div>
                )}
                {phone && (
                  <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <span>{phone}</span>
                  </div>
                )}
                {email && (
                  <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <span>{email}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="four columns download">
              <h2>Get My Resume</h2>
              <p>Download my resume to learn more about my experience and skills.</p>
              {resumedownload ? (
                <a 
                  href={resumedownload} 
                  className="button resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
              ) : (
                <button className="button resume-btn disabled" disabled>
                  <i className="fa fa-file-pdf-o"></i>
                  Resume Coming Soon
                </button>
              )}
              
              {/* Quick stats */}
              <div className="quick-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
