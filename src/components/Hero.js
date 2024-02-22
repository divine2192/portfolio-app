import React from 'react';
import avatar from '../Assets/avatar.svg';
const Hero = () => {
  return (
    <div id="home" className="hero bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Hi! I'm Divine Ede</h1>
            <p className="lead">I like to craft solid and scalable frontend  products with great user experiences.</p>
          </div>
          <div className="col-md-6">
            <img src={avatar} className="img-fluid rounded" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;