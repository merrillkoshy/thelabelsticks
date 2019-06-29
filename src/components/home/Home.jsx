import React, { Component } from "react";
import "./Home.css";
import FlipBook from "../flipbook/FlipBook";

import axios from "axios";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      isClickedReadMore: false,
      date: new Date()
    };
  }

  componentDidMount() {
    document.title = "The Label Sticks";
    axios({
      url: "http://localhost:3000/stars",
      method: "get",
      withCredentials: true
    })
      .then(data => {
        console.log({ data });
        localStorage.setItem("stars", JSON.stringify(data.data));
      })
      .catch(err => alert(err));
  }
  setHoverElementById = id => this.setState({ displayHoverelementById: id });

  displayHoverelementById() {
    return this.state.displayHoverelementById;
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  month = () => {
    return months[this.state.date.getMonth()];
  };
  showFlipBook = item => this.setState({ showFlipBook: item });

  render() {
    return (
      <div className="home">
        <div className="masthead">
          <img
            className="logo"
            src="https://thelabelsticks.com/tls_red.png"
            alt="The Label Sticks"
          />
          <div className="timestamp">
            {this.state.date.getDate()} {this.month()}{" "}
            {this.state.date.getFullYear()}
          </div>
        </div>
        <div className="menu">
          <a
            href="#"
            className="menuitem"
            onMouseEnter={() => this.setHoverElementById(1)}
            onMouseLeave={() => this.setHoverElementById(0)}
          >
            OUR STARS
            {this.displayHoverelementById() === 1 && (
              <div className="hover">
                <h1>OUR STARS</h1>
                <div className="imagewrapper">
                  <img src="https://thelabelsticks.com/assets/homepage-section/our-stars.jpg" />
                  <p>
                    The Label Sticks features celebrities that have outshone the
                    crowd and created labels that glam the world. These stars
                    form our galaxy called fashion.
                  </p>
                  <button onClick={() => this.showFlipBook("stars")}>
                    READ
                  </button>
                </div>
              </div>
            )}
            <p>
              Celebrities that have outshone <strong>the crowd</strong>
            </p>
          </a>
          <a
            href="#"
            className="menuitem"
            style={{
              fontFamily: "Rubik Mono One, sans-serif",
              fontWeight: "500",
              color: "#ac181e"
            }}
            onMouseEnter={() => this.setHoverElementById(2)}
            onMouseLeave={this.handleMouseHover}
          >
            ROYALTY
            {this.displayHoverelementById() === 2 && (
              <div className="hover">
                <h1>ROYALTY</h1>
                <div className="imagewrapper">
                  <img src="https://thelabelsticks.com/assets/homepage-section/royalty.jpg" />
                  <p>
                    Elegance and grace come naturally to the elite. They are
                    deeply rooted to their culture and equally connected to the
                    world today. Here’s a window to their life.
                  </p>
                  <button onClick={() => this.showFlipBook("royalty")}>
                    READ
                  </button>
                </div>
              </div>
            )}
            <p>Here’s a window to their life</p>
          </a>
          <a
            href="#"
            className="menuitem"
            style={{ fontFamily: "Abril Fatface, cursive", fontWeight: "500" }}
          >
            VANITY BOOST
            <p style={{ fontFamily: "serif" }}>
              Confidence comes from within you but what’s outside matters just
              as much
            </p>
          </a>
          <a className="menuitem">
            BOUTIQUE BRANDS
            <p>Nothing haunts us like the things we didn't buy</p>
          </a>
          <a
            href="#"
            className="menuitem"
            style={{
              fontFamily: "Rubik Mono One, sans-serif",
              fontWeight: "500",
              fontStyle: "italic",
              letterSpacing: "-0.5vmin",
              fontSize: "calc(2vmin + 3px)",
              color: "#ac181e"
            }}
          >
            LEARNING CURVE
            <p style={{ letterSpacing: "0vmin", fontStyle: "normal" }}>
              Stars that shine through their students
            </p>
          </a>
          <a
            href="#"
            className="menuitem"
            style={{
              position: "absolute",
              right: "4vmin",
              top: "35vmin",
              color: "#ac181e"
            }}
          >
            BON VOYAGE
            <p style={{ fontFamily: "serif" }}> Here to guide you through !</p>
          </a>
          <a
            href="#"
            className="menuitem"
            style={{
              fontFamily: "Abril Fatface, cursive",
              fontWeight: "500",
              position: "absolute",
              right: "4vmin",
              top: "50vmin",
              color: "#ac181e"
            }}
          >
            DESTINATIONS
            <p>
              {" "}
              Trending <strong>properties</strong> and property related news
            </p>
          </a>
        </div>
        <img
          alt="The Labelsticks director Ms.Sandy Nathan"
          src="https://thelabelsticks.com/assets/tls_cover.jpg"
        />
        {this.state.showFlipBook === "stars" && <FlipBook />}
        {this.state.showFlipBook && (
          <div
            className="closeButton"
            onClick={() => {
              this.setState({ showFlipBook: (this.state.showFlipBook = "") });
            }}
          >
            BACK
          </div>
        )}
      </div>
    );
  }
}
export default Home;
