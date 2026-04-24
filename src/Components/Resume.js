import React, { useState, useEffect } from "react";
import "./Resume.css";

const Resume = ({ data }) => {
  const [activeTab, setActiveTab] = useState('experience');
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    // Animate skills when component mounts
    if (data?.skills) {
      setTimeout(() => {
        setAnimatedSkills(data.skills);
      }, 500);
    }
  }, [data?.skills]);

  if (!data) return null;

  const { skillmessage, education, work, skills } = data;

  // Skill color mapping for consistency
  const skillColors = {
    'Next.js': '#000000',
    'React Native': '#61DAFB',
    'Javascript': '#F7DF1E',
    'Typescript': '#3178C6',
    'AWS': '#FF9900',
    'CSS': '#1572B6',
    'Nodejs': '#339933',
    'Tailwind CSS': '#61DAFB',
    'Git': '#FF9900',
    'UI/UX': '#FF6B6B'
  };

  const getSkillColor = (skillName) => {
    return skillColors[skillName] || '#0762f9';
  };

  return (
    <section id="resume" className="resume-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>My Journey</h2>
        <p>Professional experience, education, and technical expertise</p>
        <div className="header-decoration"></div>
      </div>

      {/* Tab Navigation */}
      <div className="resume-tabs">
        <button 
          className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          <i className="fa fa-briefcase"></i>
          Experience
        </button>
        <button 
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <i className="fa fa-graduation-cap"></i>
          Education
        </button>
        <button 
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <i className="fa fa-code"></i>
          Skills
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="experience-content">
            <div className="timeline">
              {work.map((job, index) => (
                <div key={job.company} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="job-card">
                      <div className="job-header">
                        <h3 className="company-name">{job.company}</h3>
                        <div className="job-links">
                          {job.link && (
                            <a 
                              href={job.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="job-link"
                              title="View Project"
                            >
                              <i className="fa fa-external-link"></i>
                            </a>
                          )}
                          {job.link2 && (
                            <a 
                              href={job.link2} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="job-link"
                              title="View Secondary Project"
                            >
                              <i className="fa fa-external-link"></i>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="job-details">
                        <h4 className="job-title">{job.title}</h4>
                        <span className="job-period">{job.years}</span>
                      </div>
                      <p className="job-description">{job.description}</p>
                      
                      {/* Job technologies/tags */}
                      <div className="job-tags">
                        {index === 0 && (
                          <>
                            <span className="job-tag">IoT</span>
                            <span className="job-tag">React Native</span>
                            <span className="job-tag">JavaScript</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="job-tag">Banking</span>
                            <span className="job-tag">Mobile App</span>
                            <span className="job-tag">Fintech</span>
                          </>
                        )}
                        {index > 1 && (
                          <>
                            <span className="job-tag">React</span>
                            <span className="job-tag">Development</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="education-content">
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={edu.school} className="education-card">
                  <div className="education-icon">
                    <i className="fa fa-university"></i>
                  </div>
                  <div className="education-info">
                    <h3 className="school-name">{edu.school}</h3>
                    <h4 className="degree">{edu.degree}</h4>
                    <span className="graduation-date">{edu.graduated}</span>
                    {edu.description && (
                      <p className="education-description">{edu.description}</p>
                    )}
                  </div>
                  <div className="education-badge">
                    {index === 0 ? 'Masters' : 'Bachelors'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="skills-content">
            {skillmessage && (
              <p className="skills-intro">{skillmessage}</p>
            )}
            
            {/* Skills Categories */}
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <div className="skills-grid">
                  {skills.filter(skill => 
                    ['Next.js', 'Javascript', 'Typescript', 'CSS', 'UI/UX'].includes(skill.name)
                  ).map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: animatedSkills.find(s => s.name === skill.name) ? skill.level : '0%',
                            backgroundColor: getSkillColor(skill.name)
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend & Mobile</h4>
                <div className="skills-grid">
                  {skills.filter(skill => 
                    ['React Native', 'Nodejs', 'AWS','Tailwind CSS', 'Git'].includes(skill.name)
                  ).map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: animatedSkills.find(s => s.name === skill.name) ? skill.level : '0%',
                            backgroundColor: getSkillColor(skill.name)
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Summary */}
            <div className="skills-summary">
              <div className="skill-highlight">
                <i className="fa fa-star"></i>
                <span>6.5+ Years Experience</span>
              </div>
              <div className="skill-highlight">
                <i className="fa fa-code"></i>
                <span>Full Stack Development</span>
              </div>
              <div className="skill-highlight">
                <i className="fa fa-mobile"></i>
                <span>Mobile App Expert</span>
              </div>
              <div className="skill-highlight">
                <i className="fa fa-cloud"></i>
                <span>Cloud Technologies</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
