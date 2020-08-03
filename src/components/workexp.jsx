import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="workexp">
          <section className="colorlib-experience" data-section="timeline">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <h2 className="colorlib-heading animate-box">
                    Work Experience
                  </h2>
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
                          <i class="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div className="timeline-label">
                          <h2>
                            Software Engineer Intern, Philips HealthCare,
                            Andover, MA
                            <span style={{ marginLeft: 10 }}>
                              July 2019 - Dec 2019
                            </span>
                          </h2>
                          <p>
                            <ul>
                              <li>
                                • Developed automation scripts using specflow
                                framework in <strong>C#</strong> to verify and
                                validate Patient Monitoring Products
                              </li>
                              <li>
                                • Created Gherkins by following{" "}
                                <strong>BDD</strong> practices and automated
                                test scenarios,
                                <strong> saving 100-person hours/week</strong>
                              </li>
                              <li>
                                • Automated code in C# for Auto-ADT features and
                                created Gherkins for Protocol Watch and Argus
                                Optical Sensor
                              </li>
                              <li>
                                • Enhanced existing code to reduce test
                                execution time and increase pass rate in Nightly
                                Build by 40%
                              </li>
                              <li>
                                • Performed code reviews and debugged existing
                                code to ensure clean and efficient code policy
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect="fadeInTop"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i class="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div className="timeline-label">
                          <h2>
                            Senior Software Engineer, BDO LLP India, Mumbai,
                            India
                            <span style={{ marginLeft: 10 }}>
                              {" "}
                              March 2018 - July 2018
                            </span>
                          </h2>
                          <p>
                            <ul>
                              <li>
                                • Designed <strong>Java</strong> based TestNG
                                automation framework for financial web
                                application using Selenium and Page Object Model
                              </li>
                              <li>
                                {" "}
                                • Developed and executed automation scripts
                                which improved accuracy and efficiency,{" "}
                                <strong>reducing test time by 60%</strong>
                              </li>
                              <li>
                                • Developed and executed automation scripts
                                which improved accuracy and efficiency, reducing
                                test time by 60%
                              </li>
                              <li>
                                • Mentored and provided one to one automation
                                training to 3 manual testers{" "}
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
                          <i class="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div className="timeline-label">
                          <h2>
                            Software Engineer, Tech Mahindra, Pune, India
                            <span style={{ marginLeft: 10 }}>
                              March 2015 - March 2018
                            </span>
                          </h2>
                          <ul>
                            <li>
                              • Created automation test scripts of telecom
                              applications using{" "}
                              <strong>Selenium WebDriver</strong>, improving
                              automation extent from 10% to 70%
                            </li>
                            <li>
                              {" "}
                              • Implemented Java Object Oriented Programming
                              <strong> (OOD) </strong>
                              concepts to create functions required for the
                              automation scripts
                            </li>
                            <li>
                              • Created reusable code modules that increased
                              regression test efficiency by 85%
                            </li>
                            <li>
                              • Involved in utilizing version control tools like
                              SVN, build tools like <strong>Maven</strong> and
                              CI tools such as
                              <strong> Jenkins</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                    <article
                      className="timeline-entry begin animate-box"
                      data-animate-effect="fadeInBottom"
                    >
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none"></div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

//export default Home;
