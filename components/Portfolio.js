import React from 'react';

const Portfolio = ({ data }) => {
  if (!data) return null;

  const { projects } = data;
  
  const projectElements = projects.map(project => {
    const projectImage = `images/portfolio/${project.image}`;
    
    return (
      <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={project.url} title={project.title} target="_blank" rel="noopener noreferrer">
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio" data-reveal>
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projectElements}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
