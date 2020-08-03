import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <footer style={{ backgroundColor: "black" }}>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  {" "}
                  <a href="https://www.facebook.com/ruchiniwalkar.3">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  {" "}
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
                  {" "}
                  <a href="https://www.instagram.com/ruchi.niwalkar/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
