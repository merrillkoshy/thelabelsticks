import React, { Component } from "react";
import "./Flipbook.css";

const stars = [
  "ANITA KANWAL",
  "WENDELL RODRICKS",
  "SONAAKSHI RAAJ",
  "ROHIT VERMA",
  "ROHIT VERMA",
  "ROCKY STAR",
  "RASHMI KUMARI",
  "AMIRA HAROUN",
  "VASILISA KOZHEMIAKO",
  "KAVITA ARORA"
];

const firstPage = "";

const numberOfPages = stars.length + 1;
let pageNumber = 1;
class FlipBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pnumber: 1,
      pageClass: "page active",
      pageInactiveClass: "page right"
    };
  }
  renderSwitch(numbersToDisplay) {
    switch (numbersToDisplay) {
      case 1:
        return firstPage;
      case 2:
        return "";
      default:
        return "";
    }
  }

  currentpageNumber = () => {
    return this.state.pnumber;
  };
  currentPageClass = () => {
    return this.state.pageClass;
  };
  inactivePageClass = () => {
    return this.state.pageInactiveClass;
  };
  render() {
    return (
      <div className="container-fb">
        {this.renderSwitch(this.currentpageNumber())}
        <div className={this.currentPageClass()}>
          <img
            style={{ maxWidth: "50vmin", position: "absolute" }}
            src="https://thelabelsticks.com/assets/homepage-section/our-stars.jpg"
            alt="Designer drawing sketches | The LabelSticks"
          />
          <div className="magazineBorder">
            <div className="textContent firstPageStyle">
              The Label Sticks features celebrities that have outshone the crowd
              and created labels that glam the world. These stars form our
              galaxy called fashion.
            </div>
            <div className="pageBottom">1 | OUR STARS</div>
          </div>
        </div>
        <div className={this.inactivePageClass()}>
          <div className="magazineBorder">
            <div className="textContent">
              <img
                className="magazineImage"
                src="https://thelabelsticks.com/assets/homepage-section/our-stars/Anita.png"
              />
              <a className="starName">
                ANITA <strong>KANWAL</strong>
              </a>
              <div className="star-description">
                Meeting the bubbly, energetic and enterprising Anita Kanwal was
                a treat to the senses and the heart. She is entertainment
                personified; no wonder she was in the film industry making waves
                with her various roles in Cinema and TV. Her penchant for acting
                bagged her acclaimed roles in the movies like Aarakshan and
                Gangaajal and daily soaps like Sasural Genda Phool and Zindagi
                Abhi Baaki Hai Mere Ghost.
              </div>
            </div>
            <div className="pageBottom">
              2 | THE <strong>LABELSTICKS</strong>
            </div>
          </div>
        </div>
        <div className="navigationDock">
          <a
            className="navigateleft"
            onClick={() => {
              if (this.state.pnumber != 1) {
                this.setState({
                  pnumber: this.state.pnumber - 1,
                  pageClass: (this.state.pageClass = "page active"),
                  pageInactiveClass: (this.state.pageInactiveClass =
                    "page right")
                });
              }
            }}
          >
            PREVIOUS
          </a>
          <a
            className="navigateRight"
            onClick={() => {
              if (this.state.pnumber < numberOfPages) {
                this.setState({
                  pnumber: this.state.pnumber + 1,
                  pageClass: (this.state.pageClass = "page left"),
                  pageInactiveClass: (this.state.pageInactiveClass =
                    "page active")
                });
              }
            }}
          >
            NEXT
          </a>
        </div>
      </div>
    );
  }
}
export default FlipBook;
