import React from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  if (!data) return null;

  const { project, github, name, description, address, social } = data;
  const city = address?.city;
  const networks = social?.map((network) => (
    <li key={network.name}>
      <a href={network.url} target="_blank" rel="noopener noreferrer">
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
        type= {randomType} // Set a specific type instead of "random"
        bg={true}
      />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <div className="container">
            <h1 className="responsive-headline">I'm {name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
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
