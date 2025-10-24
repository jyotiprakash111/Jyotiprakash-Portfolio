import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [manualClick, setManualClick] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setManualClick(true);
    
    // Reset manual click after a delay to allow scroll detection to resume
    setTimeout(() => {
      setManualClick(false);
    }, 1000);
  };

  useEffect(() => {
    // Don't set up observers during manual navigation
    if (manualClick) return;

    const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    if (sectionElements.length === 0) return;

    // Track which sections are currently intersecting
    const intersectingSections = new Map();

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // More conservative margins for better accuracy
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          intersectingSections.set(sectionId, entry.intersectionRatio);
        } else {
          intersectingSections.delete(sectionId);
        }
      });

      // Find the section with highest intersection ratio
      let bestSection = 'home';
      let highestRatio = 0;

      for (const [sectionId, ratio] of intersectingSections) {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          bestSection = sectionId;
        }
      }

      // Fallback: if no sections are intersecting well, use scroll position
      if (highestRatio < 0.1) {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop < 100) {
          bestSection = 'home';
        } else if (scrollTop + windowHeight >= documentHeight - 50) {
          bestSection = 'contact';
        } else {
          // Find closest section center to viewport center
          const viewportCenter = scrollTop + windowHeight / 2;
          let closestDistance = Infinity;
          
          sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
              const sectionCenter = element.offsetTop + element.offsetHeight / 2;
              const distance = Math.abs(viewportCenter - sectionCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                bestSection = sectionId;
              }
            }
          });
        }
      }

      // Only update if actually changed
      if (bestSection !== activeSection) {
        setActiveSection(bestSection);
      }
    });

    // Observe all sections
    sectionElements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [activeSection, manualClick]);

  if (!data) return null;

  const { project, github, name, description, address, social } = data;
  const city = address?.city;
  
  // Filter out social networks with empty URLs and create the list
  const networks = social?.filter(network => network.url && network.url.trim() !== "")
    .map((network) => (
      <li key={network.name}>
        <a 
          href={network.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit ${network.name} profile`}
        >
          <i className={network.className}></i>
        </a>
      </li>
    ));

  // Choose a random type from the given options
  const particleTypes = ["cobweb", "polygon", "fountain"];
  const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];

  return (
    <header id="home">
      <ParticlesBg
        color={["#130f40", "#535c68", "red", "white", "#f9ca24"]}
        type= {randomType}
        bg={true}
      />

      <nav id="nav-wrap">
        <a 
          className="mobile-btn" 
          href="#nav-wrap" 
          title="Show navigation"
          aria-label="Show navigation menu"
        >
          Show navigation
        </a>
        <a 
          className="mobile-btn" 
          href="#home" 
          title="Hide navigation"
          aria-label="Hide navigation menu"
        >
          Hide navigation
        </a>
        <ul id="nav" className="nav" role="navigation">
          <li className={activeSection === 'home' ? 'current' : ''}>
            <a 
              className="smoothscroll" 
              href="#home"
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li className={activeSection === 'about' ? 'current' : ''}>
            <a 
              className="smoothscroll" 
              href="#about"
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </li>
          <li className={activeSection === 'resume' ? 'current' : ''}>
            <a 
              className="smoothscroll" 
              href="#resume"
              onClick={() => handleNavClick('resume')}
            >
              Resume
            </a>
          </li>
          <li className={activeSection === 'portfolio' ? 'current' : ''}>
            <a 
              className="smoothscroll" 
              href="#portfolio"
              onClick={() => handleNavClick('portfolio')}
            >
              Works
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'current' : ''}>
            <a 
              className="smoothscroll" 
              href="#contact"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <div className="container">
            <h1 className="responsive-headline">
              I'm {name || "Jyotiprakash"}
            </h1>
            <h3>{description || "Web Developer & Mobile App Engineer"}</h3>
            <hr />
            {networks && networks.length > 0 && (
              <ul className="social">{networks}</ul>
            )}
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
