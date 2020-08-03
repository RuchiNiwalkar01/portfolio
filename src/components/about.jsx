import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                style={{ marginTop: 15 }}
                className="profile-pic"
                src="images/pic1.png"
                alt="pic1"
              />
            </div>
            <div className="nine columns main-col">
              <p>
                <section className="colorlib-about" data-section="about">
                  <div className="colorlib-narrow-content">
                    <div className="row">
                      <div className="col-md-12">
                        <div
                          className="row row-bottom-padded-sm animate-box"
                          data-animate-effect="fadeInLeft"
                        >
                          <div className="col-md-12">
                            <div className="about-desc">
                              <span
                                style={{ marginLeft: "40px" }}
                                className="heading-meta"
                              >
                                About Me
                              </span>
                              <h3
                                style={{ marginLeft: "40px" }}
                                className="colorlib-heading"
                              >
                                Who Am I?
                              </h3>
                              <div style={{ marginLeft: "40px" }}>
                                A graduate student, pursuing Master’s degree in
                                Information System at Northeastern University.
                                Interested in Software Development and Software
                                Engineering job opportunities. I have been
                                developing software and web applications using
                                programming languages and web technologies like
                                Java,React, HTML, CSS, Angular, React, Spring
                                MVC & Hibernate. Experience with automation
                                frameworks involving testing practices. I am
                                keenly interested in Information Technology and
                                I love to solve business problems by providing
                                efficient software solutions to the same. I aim
                                to be an important asset to the company I work
                                with, involving myself in decision making,
                                designing and development processes of their
                                products.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: 200 }} className="columns download">
                    <a
                      style={{ backgroundColor: "#11ABB0" }}
                      href="Resume.pdf"
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </div>
                </section>
              </p>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
          <div>
            <section className="colorlib-about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <span className="heading-meta">What I do?</span>
                    <h3 className="colorlib-heading">
                      Here are some of my expertise
                    </h3>
                  </div>
                </div>
                <div className="row row-pt-md">
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                      <span className="icon">
                        <i className="icon-bulb" />
                      </span>
                      <div className="desc">
                        <h3>Web Development </h3>
                        <p>
                          Knowledge in building web applications using
                          JavaScript,React,HTML,CSS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                      <span className="icon">
                        <i className="icon-phone3" />
                      </span>
                      <div className="desc">
                        <h3>Data Structures & Algorithms</h3>
                        <p>
                          I have a strong grasp of CS fundamental concepts and
                          actively keep solving problems on LeetCode
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                      <span className="icon">
                        <i className="icon-data" />
                      </span>
                      <div className="desc">
                        <h3>AWS & Dev Ops</h3>
                        <p>
                          Knowledge of building applications and deploying it
                          using CI/CD practices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
