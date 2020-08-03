import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}

        <section id="contact">
          <div className="row">
            <div className="three columns"></div>
            <div className="nine columns main-col">
              <div className="row">
                <div className="columns contact-details">
                  <h2 style={{ color: "white" }}>Contact Details</h2>
                  <p className="address">
                    <span>Ruchi Niwalkar</span>
                    <br />
                    <i
                      style={{ paddingRight: 10 }}
                      className="fa fa-map-marker"
                    />
                    <span>
                      31 Saint Germain Street, Apt 3<br />
                      Boston, MA 02115 US
                    </span>
                    <br />
                    <i style={{ paddingRight: 10 }} className="fa fa-phone" />
                    <span>(857)-452-2317</span>
                    <br />
                    <i
                      style={{ paddingRight: 10 }}
                      className="fa fa-envelope-o"
                    />
                    <span>niwalkar.r@northeastern.edu</span>
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
