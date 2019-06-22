import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    document.title = "The Label Sticks";
  }
  render() {
    return (
      <div className="home">
        <div className="masthead">
          <img
            className="logo"
            src="https://thelabelsticks.com/tls_red.png"
            alt="The Label Sticks"
          />
        </div>
        <div className="menu">
          <a className="menuitem">
            OUR STARS
            <p>
              Celebrities that have outshone <strong>the crowd</strong>
            </p>
          </a>
          <a className="menuitem">
            ROYALTY
            <p>Here’s a window to their life</p>
          </a>
          <a className="menuitem">
            VANITY BOOST
            <p>
              Confidence comes from within you but what’s outside matters just
              as much
            </p>
          </a>
          <a className="menuitem">
            BOUTIQUE BRANDS
            <p>Nothing haunts us like the things we didn't buy</p>
          </a>
          <a className="menuitem">
            LEARNING CURVE
            <p>Know the stars that shine through their students</p>
          </a>
        </div>
        <img
          alt="The Labelsticks director Ms.Sandy Nathan"
          src="https://thelabelsticks.com/assets/tls_cover.jpg"
        />
      </div>
    );
  }
}
export default Home;
