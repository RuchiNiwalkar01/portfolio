import React, { Component } from "react";

class Header extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#workexp">
                  Work Experience
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Ruchi Niwalkar</h1>
              <h3 style={{ color: "white" }}>
                An aspiring <span>software developer</span> with a keen sense in
                solving problems and building applications. Let's{" "}
                <a className="smoothscroll" href="#about">
                  {" "}
                  start scrolling{" "}
                </a>{" "}
                and learn more{" "}
                <a className="smoothscroll" href="#about">
                  {" "}
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/ruchiniwalkar.3">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/RuchiNiwalkar01">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ruchiniwalkar/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ruchi.niwalkar/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
