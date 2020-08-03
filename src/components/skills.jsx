import React, { Component } from "react";
class Skills extends Component {
  render() {
    return (
      <div>
        <section id="skills">
          <section className="colorlib-experience" data-section="skills">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  datat-animate-effect="fadeInLeft"
                >
                  <h2 className="colorlib-heading animate-box">
                    Technical Skills
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Programming Languages</h2>
                        <p>
                          <ul>
                            <li> Java, C#, JavaScript, Python(basics)</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Frameworks</h2>
                        <p>
                          <ul>
                            <li>
                              {" "}
                              SpringBoot, Hibernate, J2EE (Spring MVC),
                              Selenium, TestNG, JUnit, Page Object Model, Java
                              Swing
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Tools and Version Control</h2>
                        <p>
                          <ul>
                            <li>
                              Eclipse, JIRA, Git, Bitbucket, JUnit, Jenkins,
                              Postman, CircleCI, Microsoft TFS
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Web Technologies</h2>
                        <p>
                          <ul>
                            <li>
                              HTML, CSS, Angular, Node.js, JSON, React, RESTful
                              API, Servlets, JSP
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Databases</h2>
                        <p>
                          <ul>
                            <li>MySQL, MongoDB, Oracle, Redis</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Skills;
