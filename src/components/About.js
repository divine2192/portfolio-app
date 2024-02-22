// About.js
import React from 'react';

function About() {
  return (
<section id="skills" class="bsb-skill-1 bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">Skills</h2>
        <p class="text-secondary mb-5 text-center lead fs-4">Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my craft.</p>
        
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row justify-content-xl-center gy-3 gy-sm-4">
      <div class="col-12 col-sm-6 col-xl-5">
        <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 class="fw-bold mb-2">Graphic Design</h3>
          <p class="text-secondary fst-italic mb-4">I am able to pay attentioon to detail, creating clean design patterns and thoughtful interactions</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-1" role="progressbar" aria-label="Bootstrap" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-5">
        <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 class="fw-bold mb-2">Frontend</h3>
          <p class="text-secondary fst-italic mb-4">I enjoy coding and bringing ideas to life. </p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-2" role="progressbar" aria-label="React" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-5">
        <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 class="fw-bold mb-2">Data Analytics</h3>
          <p class="text-secondary fst-italic mb-4">I am enjoy working with big data, using Analytics and quering information to make smart business decisions.</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-3" role="progressbar" aria-label="Vue" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-5">
        <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 class="fw-bold mb-2">UX</h3>
          <p class="text-secondary fst-italic mb-4">I enjoy creating everyday objects that help people live a better life.</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-width-4" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  

  );
}

export default About;