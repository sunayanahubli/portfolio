import React from "react";

const App = () => {
  return (
    <div className>
      <header>
        <h1>Sunayana Hubli</h1>
        <hr />
        <p>MS in Computer Science, UMass Lowell</p>
        <hr />
      </header>
      <main className="main-container">
        <section className="contact-section">
          <h2>Contact</h2>
          <p>
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/sunayanahubli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: sunayanahubli
            </a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/sunayana-hubli"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIN: sunayana-hubli
            </a>
          </p>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>Languages: Java, JavaScript, ReactJS, C#, Python</li>
            <li>Web Technologies: HTML, CSS, REST APIs</li>
            <li>Cloud Services: AWS (Advanced), Azure (Beginner)</li>
            <li>Database Systems: Oracle, DynamoDB, MongoDB</li>
            <li>
              Testing and Quality Assurance: Microsoft Test Manager (MTM),
              Postman, JEST, Cucumber, Selenium
            </li>
          </ul>
        </section>
        <section className="certifications-section">
          <h2>Certifications</h2>
          <p>
            AWS
            <ul>
              <li>
                <a
                  href="https://www.credly.com/badges/e5122bb9-72e8-471e-b790-9d198ffcf467/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Certified Developer – Associate
                </a>
              </li>
              <li>
                <a
                  href="https://www.credly.com/badges/7c884c35-8724-433d-922e-8da015f372ca/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certified Cloud Practitioner
                </a>
              </li>
            </ul>
          </p>
        </section>
        <section className="education-section">
          <h2>Education</h2>
          <h3>MS Computer Science</h3>
          <p>University of Massachusetts, Lowell</p>
          <p>2022-2023</p>
        </section>
      </main>
      <main className="main-container">
        <section className="about-section">
          <h2>About</h2>
          <p>
            Aspiring to become a Software Engineer and be part of teams that
            create amazing solutions.
          </p>
        </section>
        <section className="projects-section">
          <h2>My Projects</h2>
          <ul>
            <li>
              <a
                href="https://github.com/sunayanahubli/SimpleCounter"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Counter</b>
              </a>{" "}
              - A simple counter built using JavaScript
            </li>
            <li>
              <b>Dine Safe:</b> Designed and developed a restaurant details
              website catering to dietary restrictions and allergies, employing
              JavaScript, ReactJS, and MongoDB for data storage.
            </li>
            <li>
              <b>Detection of diabetic retinopathy:</b> Disease identification
              in retinal images, utilizing Neural Networks, SVM, and various
              Machine Learning algorithms within Python using TensorFlow and
              scikit-learn.
            </li>
            <li>
              <b>
                <a
                  href="https://github.com/sunayanahubli/FoundationsInDigitalHealth/tree/main/Project_02"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search engine:
                </a>
              </b>{" "}
              Development of a quick search for the MIMIC database with advanced
              data indexing using Solr, Python, Flask, and JavaScript.
            </li>
            <li>
              <b>
                <a
                  href="https://github.com/sunayanahubli/FoundationsInDigitalHealth/tree/main/Project_01"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Identify cycle/loops in UMLS:
                </a>
              </b>{" "}
              Developed a Python-based solution to identify cycles in the UMLS
              database, with integration into MySQL.
            </li>
          </ul>
        </section>
        <section className="experience-section">
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>Senior Engineer | Siemens Healthineers, Bangalore</h3>
              <p>
                Worked on the development of the 'Immunization Management' Web
                Application using Java and ReactJS. Responsible for automation
                testing for the 'Simulator Training' web application, using AWS,
                C#, and Selenium to ensure optimal functionality and
                performance.
              </p>
            </li>
            <li>
              <h3>Software Engineer | Siemens Medical Solutions, Issaquah</h3>
              <p>
                Focused on verifying Ultrasound systems, particularly in Medical
                Imaging. Responsibilities included requirement reviews, test
                case creation, execution, and comprehensive test reporting.
              </p>
            </li>
            <li>
              <h3>Associate Engineer | Siemens, Bangalore, India</h3>
              <p>
                Engaged in the development of scripts using Image Processing
                Software, focusing on C# and OpenCV for Ultrasound Images.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
