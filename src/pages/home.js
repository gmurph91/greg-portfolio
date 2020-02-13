import React, {Component} from 'react';
export default class homePage extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
  <nav>
    <div className="nav-top" id="nav">
      <h1>Gregory Murphy</h1>
      <h3>Full Stack Developer</h3>
    </div>
    <ul>
      <li><a id="AboutLink" href="#About">About</a></li>
      <li><a id="ExperienceLink" href="#Experience">Experience</a></li>
      <li><a id="ProjectsLink" href="#Projects">Projects</a></li>
      <li><a id="EducationLink" href="#Education">Education</a></li>
      <li><a id="ContactLink" href="#Contact">Contact</a></li>
      <li><a id="ResumeLink" href="/resume"
          target="_blank" rel="noopener noreferrer">Resume</a></li>
    </ul>
  </nav>
  <main>
    <section id="intro"></section>
    <section id="About">
      <h2>About Me</h2>
      <p className="bio">Born and raised in Idaho Falls, I moved to Utah in 2009. I graduated from BYU in 2014 with a degree
        in Business Management. After a few years in the real world, I decided to pivot toward a career in computer
        science. I enjoy spending time with my wife and daughter, watching sports, and getting outside in the great
        outdoors.</p>
    </section>
    <section id="Experience">
      <h2>Work Experience</h2>

      <div className="jobBox GoReact">
        <div className="jobHeader">
          <h4>GoReact</h4>
          <h4>Senior Support Engineer</h4>
          <h4>Dec. 2018 - Present</h4>
        </div>

        <ul>
          <li>Responsible for the design, code, and
            implementation of the Help Center.</li>
          <li>Demonstrated working knowledge of HTML,
            CSS, and Javascript.</li>
          <li>Wrote and maintained over 150 help desk
            articles.</li>
        </ul>
      </div>


      <div className="jobBox GoReact">
        <div className="jobHeader">
          <h4>GoReact</h4>
          <h4>Technical Support Representative</h4>
          <h4>Aug. 2017 - Dec. 2018</h4>
        </div>
        <ul>
          <li>Provided technical support for customers
            through chat, email, and phone.</li>
          <li>Identified and reproduced bugs for
            development team.</li>
        </ul>
      </div>

      <div className="jobBox Zions">
        <div className="jobHeader">
          <h4>Zions Bank</h4>
          <h4>Assistant Manager</h4>
          <h4>Jan. 2015 - Jul. 2017</h4>
        </div>
        <ul>
          <li>Generated over $3 million dollars in consumer loans</li>
          <li>Managed a team of 8 different tellers</li>
        </ul>
      </div>
    </section>
    <section id="Projects">
      <h2 className="headerMargin">Projects</h2>
      <div className="allProjects">
      <div className="projectBox">
        <img className="projectImage" src="statpage.png" alt="statpage.png" />
        <h4>Stat Page</h4>
        <div className="projectDescription"> 
        <p>This is a short description of what the website does.  This is a short description of what the website does.</p>
        </div>
      </div>
      <div className="projectBox">
        <img className="projectImage" src="statpage.png" alt="statpage.png" />
        <h4>Stat Page</h4>
        <div className="projectDescription"> 
          <p>This is a short description of what the website does.  This is a short description of what the website does.</p>
          </div>
      </div>
      <div className="projectBox">
        <img className="projectImage" src="statpage.png" alt="statpage.png"/>
        <h4>Stat Page</h4>
        <div className="projectDescription"> 
          <p>This is a short description of what the website does.  This is a short description of what the website does.</p>
          </div>
      </div>
      </div>
    </section>
    <section id="Education">
      <h2>Education</h2>
      <div className="eduBox Helio">
        <div className="eduHeader">
          <h4>Helio Training</h4>
          <h4>Full Stack Web Development Certificate</h4>
          <h4>Aug. 2019 - Present</h4>
        </div>
        <ul>
          <li>Learned the skills necessary to design and build a fully functional web application. Including HTML, CSS,
            Javascript, React, NodeJS, NPM, Express, MongoDB, Git, and more.</li>
          <li>Created several different projects from the ground up.</li>
        </ul>
      </div>
      <div className="eduBox BYU">
        <div className="eduHeader">
          <h4>Brigham Young University</h4>
          <h4>Bachelor of Business Management</h4>
          <h4>Aug. 2009 - Dec. 2014</h4>
        </div>
        <ul>
          <li>3.64 GPA</li>
        </ul>
      </div>
    </section>
    <section id="Contact">
      <h2>Contact Me</h2>
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
    </section>

  </main>
  </div>
)}}