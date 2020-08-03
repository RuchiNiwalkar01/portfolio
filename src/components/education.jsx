import React, { Component } from "react";
class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="education">
          <section className="colorlib-experience" data-section="education">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  datat-animate-effect="fadeInLeft"
                >
                  <span className="heading-meta">highlights</span>
                  <h2 className="colorlib-heading animate-box">Education</h2>
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
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Northeastern University, Boston, MA
                          <span style={{ marginLeft: 10 }}>
                            Aug 2018 - Dec 2020
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              • Pursuing Master of Science in Information
                              Systems
                            </li>
                            <li>
                              • Exposure to technologies such as
                              Cloud-Computing, Web Development and Test driven
                              practices
                            </li>
                            <li>
                              <strong>Coursework:</strong> Application
                              Engineering Development, Network Structures and
                              Cloud Computing, Web Development, Data Structures
                              & Algorithms
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
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Rizvi College of Engineering, Mumbai, India
                          <span style={{ marginLeft: 10 }}>
                            Aug 2011 - Aug 2015
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              • Completed Bachelor of Engineering in Electronics
                              with distinction
                            </li>
                            <li>
                              <strong>Coursework:</strong> Java, Micro-processor
                              & Micro-controller, Data Structures & Algorithms
                            </li>
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

export default Education;
