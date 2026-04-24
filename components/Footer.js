import React, { useState, useEffect } from "react";

const Footer = ({ data }) => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!data) return null;

  const networks = data.social?.filter(network => network.url && network.url.trim() !== "")
    .map((network) => (
      <li key={network.name} className="social-item">
        <a 
          href={network.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`Visit ${network.name} profile`}
          title={`Follow me on ${network.name}`}
        >
          <i className={network.className}></i>
          <span className="social-tooltip">{network.name}</span>
        </a>
      </li>
    ));

  return (
    <footer className="footer-section" data-reveal>
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-column" data-reveal>
              <div className="footer-brand">
                <h3>Jyotiprakash</h3>
                <p>Full Stack Developer & Mobile App Engineer</p>
              </div>
              <p className="footer-description">
                Passionate about creating innovative digital solutions with modern technologies. 
                Let's build something amazing together!
              </p>
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">6.5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="footer-column" data-reveal>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#resume" className="footer-link">Resume</a></li>
                <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column" data-reveal>
              <h4>Expert In</h4>
              <ul className="footer-links">
                <li><span className="service-item">Web Development</span></li>
                <li><span className="service-item">Mobile Apps</span></li>
                <li><span className="service-item">UI/UX Design</span></li>
                <li><span className="service-item">React Development</span></li>
                <li><span className="service-item">Node.js Backend</span></li>
              </ul>
            </div>

            <div className="footer-column" data-reveal>
              {networks && networks.length > 0 && (
                <div className="footer-social">
                  <h5>Follow Me</h5>
                  <ul className="social-links">{networks}</ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-reveal>
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} <span className="brand-name">Jyotiprakash</span>. 
                All rights reserved.
              </p>
              <p className="sub-copyright">
                Designed & Developed with <i className="fa fa-heart heart-icon"></i> by 
                <span className="developer-name"> Jyotiprakash</span>
              </p>
            </div>
            
            <div className="footer-tech">
              <span>Built with</span>
              <div className="tech-stack">
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <i className="fa fa-angle-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
