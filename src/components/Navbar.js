import React from 'react';
import resume from '../Assets/Resume-Divine-Ede.pdf';


import homeLogo from '../Assets/logo.png';
function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#home"><img src={homeLogo} alt='logo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home"> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={resume}>Resume</a>
          </li>
        </ul>
        <button  className="btn btn-contact"><a href="#contact">Contact</a></button>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;