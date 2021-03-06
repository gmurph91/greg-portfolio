import React, {Component} from 'react';
require('bootstrap')
export default class homePage extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize()
  }

  componentDidUpdate(){
    this.handleResize()
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleResize = () => {
    var element = document.getElementById("nav");
    var element2 = document.getElementById("main");
    var element3 = document.getElementById("job1");
    var element4 = document.getElementById("job2");
    var element5 = document.getElementById("school1");
    var element6 = document.getElementById("school2");
    if (this.state.width <= 800) {
      element.classList.add("hidden");
      element2.classList.add("main2");
      element3.classList.add("jobHeader2");
      element4.classList.add("jobHeader2");
      element5.classList.add("eduHeader2");
      element6.classList.add("eduHeader2");
    } else { 
    element.classList.remove("hidden");
    element2.classList.remove("main2");
    element3.classList.remove("jobHeader2");
      element4.classList.remove("jobHeader2");
      element5.classList.remove("eduHeader2");
      element6.classList.remove("eduHeader2");
  }
  }

handleScroll() {
  if (document.documentElement.scrollTop > document.documentElement.clientHeight * 0.5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 1.5) {
    document.getElementById("AboutLink").classList.add("active");
  } else { document.getElementById("AboutLink").classList.remove("active"); }
  if (document.documentElement.scrollTop > document.documentElement.clientHeight * 1.5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 2.5) {
    document.getElementById("ExperienceLink").classList.add("active");
  } else { document.getElementById("ExperienceLink").classList.remove("active"); }
  if (document.documentElement.scrollTop > document.documentElement.clientHeight * 2.5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 3.5) {
    document.getElementById("ProjectsLink").classList.add("active");
  } else { document.getElementById("ProjectsLink").classList.remove("active"); }
  if (document.documentElement.scrollTop > document.documentElement.clientHeight * 3.5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 4.5) {
    document.getElementById("EducationLink").classList.add("active");
  } else { document.getElementById("EducationLink").classList.remove("active"); }
  if (document.documentElement.scrollTop > document.documentElement.clientHeight * 4.5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 5.5) {
    document.getElementById("ContactLink").classList.add("active");
  } else { document.getElementById("ContactLink").classList.remove("active"); }
}
    

render(){
return(
    <div>
  <nav id="nav">
    <div className="nav-top" id="nav">
      <h2>Gregory Murphy</h2>
      <h6>Full Stack Developer</h6>
    </div>
    <ul>
      <li><a id="AboutLink" href="#About">About</a></li>
      <li><a id="ExperienceLink" href="#Experience">Experience</a></li>
      <li><a id="ProjectsLink" href="#Projects">Projects</a></li>
      <li><a id="EducationLink" href="#Education">Education</a></li>
      <li><a id="ContactLink" href="#Contact">Contact</a></li>
      <li><a id="ResumeLink" href="/resume" target="_blank" rel="noopener noreferrer">Resume</a></li>
      <li><a id="BlogLink" href="/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
    </ul>
  </nav>
  <main id="main">
    <section id="intro"></section>
    <section id="About">
      <h3>About Me</h3>
      <p className="bio">Born and raised in Idaho Falls, I moved to Utah in 2009. I graduated from BYU in 2014 with a degree
        in Business Management. After a few years in the real world, I decided to pivot toward a career in computer
        science. I enjoy spending time with my wife and daughter, watching sports, and getting outside in the great
        outdoors.</p>
    </section>
    <section id="Experience">
      <h3>Work Experience</h3>

      <div className="jobBox GoReact">
        <div className="jobHeader" id="job1">
          <h6>GoReact</h6>
          <h6>Senior Support Engineer</h6>
          <h6>Dec. 2018 - Present</h6>
        </div>

        <ul>
          <li>Responsible for the design, code, and implementation of the Help Center (HTML, CSS, and JavaScript)</li>
          <li>Wrote and maintained over 150 help desk articles</li>
          <li>Provided escalation support for other Support Representatives by utilizing Loggly, FullStory, and MySQL database</li>
        </ul>
      </div>


      <div className="jobBox GoReact">
        <div className="jobHeader" id="job2">
          <h6>GoReact</h6>
          <h6>Technical Support Representative</h6>
          <h6>Aug. 2017 - Dec. 2018</h6>
        </div>
        <ul>
          <li>Identified and reproduced bugs for the development team and documented the reproduction steps in Jira</li>
          <li>Provided technical support for customers through chat, email, and phone</li>
          <li>Utilized diagnostic tools to troubleshoot software and hardware issues related to video recording</li>
        </ul>
      </div>
    </section>
    <section id="Projects">
      <h3 className="headerMargin">Projects</h3>
      <div className="allProjects">
      <div className="projectBox">
        <img className="projectImage" src="statpage.png" alt="statpage.png" />
        <h6><a className="projectLink" href="http://statpage.herokuapp.com/">Stat Page</a></h6>
        <div className="projectDescription"> 
        <p>A React app used to quickly generate graphics for Instagram pages with over 450,000 followers (graphics were previously made with Photoshop)</p>
        </div>
      </div>
      <div className="projectBox">
        <img className="projectImage" src="moviedb.png" alt="moviedb.png" />
        <h6><a className="projectLink" href="http://gregmovies.herokuapp.com/">Movie Database</a></h6>
        <div className="projectDescription"> 
        <p>A React app used to track and view information on movies and TV shows.</p>
        </div>
      </div>
      <div className="projectBox">
        <img className="projectImage" src="calendar.png" alt="calendar.png" />
        <h6><a className="projectLink" href="http://gregcalendar.herokuapp.com/">Calendar</a></h6>
        <div className="projectDescription"> 
          <p>A simple calendar app with CRUD capabilities.</p>
          </div>
      </div>
      <div className="projectBox">
        <img className="projectImage" src="codenames.png" alt="codenames.png"/>
        <h6><a className="projectLink" href="http://greg-codenames.herokuapp.com/">Codenames</a></h6>
        <div className="projectDescription"> 
          <p>A React app based on the popular board game Codenames. Includes a live chat feature so players can join and play remotely.</p>
          </div>
      </div>
      </div>
    </section>
    <section id="Education">
      <h3>Education</h3>
      <div className="eduBox Helio">
        <div className="eduHeader" id="school1">
          <h6>Helio Training</h6>
          <h6>Full Stack Web Development Certificate</h6>
          <h6>Aug. 2019 - Present</h6>
        </div>
        <ul>
          <li>Learned the skills necessary to design and build a fully functional web application. Including HTML, CSS,
            Javascript, React, NodeJS, NPM, Express, MongoDB, Git, and more.</li>
          <li>Created several different projects from the ground up.</li>
        </ul>
      </div>
      <div className="eduBox BYU">
        <div className="eduHeader" id="school2">
          <h6>Brigham Young University</h6>
          <h6>Bachelor of Business Management</h6>
          <h6>Aug. 2009 - Dec. 2014</h6>
        </div>
        <ul>
          <li>3.64 GPA</li>
        </ul>
      </div>
    </section>
    <section id="Contact">
      <h3>Contact Me</h3>
      <div className="contacts">
      <img src="email.png" alt="email.png"/>
      <p>
      <a href="mailto:murphygreg6@gmail.com" target="_blank" rel="noopener noreferrer">murphygreg6@gmail.com</a>
    </p>
    </div>
    <div className="contacts">
      <img src="linkedin.png" alt="linkedin.png"/>
      <p><a href="https://www.linkedin.com/in/gmurph91/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
    <div className="contacts">
    <img src="github.png" alt="github.png"/>
      <p><a href="https://github.com/gmurph91" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
    <div className="contacts">
    <img src="exercism.png" alt="exercism.png"/>
      <p><a href="https://exercism.io/profiles/gmurph91" target="_blank" rel="noopener noreferrer">Exercism</a></p>
    </div>
    </section>

  </main>
  </div>
)}}