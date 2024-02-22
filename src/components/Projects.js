import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Password Generator',
    image: '../Assets/Projects/passwordgen.png',
    description: 'This is an online website which help users to generate random password for use.',
    Deployed: 'https://divine2192.github.io/password-generator/starter/index',
    GitHub:'https://github.com/divine2192/password-generator' 
  },
  {
    id: 2,
    title: 'Quiz Design',
    image: '../Assets/coding.png',
    description: 'This project is an interactive quiz, a timed coding quiz with multiple-choice questions.',
    Deployed: 'https://divine2192.github.io/codingQuizGame/starter/index',
    GitHub:'https://github.com/divine2192/codingQuizGame' 
  },
  
  {
    id: 3,
    title: 'Weather Dashboard',
    image: '../Assets/Projects/weather.png',
    description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
    Deployed: 'https://divine2192.github.io/WeatherDashboard/index',
    GitHub:'https://github.com/divine2192/WeatherDashboard' 
  },
  {
    id: 4,
    title: 'Day Scheduler',
    image: '../Assets/Projects/scheduler.png',
    description: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
    Deployed: 'https://divine2192.github.io/WorkDayScheduler/starter/index',
    GitHub:'https://github.com/divine2192/WorkDayScheduler' 
  },
];
const Projects = ()=> {
  return (
   <section id="projects" className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 col-lg-8">
        <h3 className="fs-5 mb-2 text-secondary text-uppercase">Portfolio</h3>
        <h2 className="display-5 mb-4">From captivating websites to breathtaking visual identities, my portfolio is a testament to my dedication.</h2>
        
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div className="row gy-3 gy-lg-4 gy-lg-0x">
      {projects.map((project) => 
       <div key={project.id} className="col-12 col-lg-6">
        <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <h2>{project.title}</h2>
          <a href="#!">
            <img className="img-fluid bsb-scale-up bsb-hover-scale" src={project.image} alt={project.title}/>
          </a>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInLeft">{project.title}</h3>
            <div className="text-white bsb-hover-fadeInRight">{project.description}</div>
          </figcaption>
        </figure>
      </div>
         )}
    </div>
  </div>
</section>
  );
}

export default Projects;