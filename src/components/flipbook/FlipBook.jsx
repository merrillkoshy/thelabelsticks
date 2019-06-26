import React, { Component } from "react";
import "./Flipbook.css";
import PostData from "./starsDetails.json";
import {BrowserRouter, Route } from "react-router-dom";

import indexPage from '../interviews/indexPage'

let pageNumber = 1;
class FlipBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pnumber: 1,
      showDescription: "",
      pageClass: "page active",
      pageInactiveClass: "page right"
    };
  }

  showDescription = () => {
    return this.state.showDescription;
  };
  currentpageNumber = () => {
    return this.state.pnumber;
  };
  currentPageClass = () => {
    return this.state.pageClass;
  };

  render() {
    return (
      <div className={"container-fb "}>
        <div
          className="page active"
          style={{ zIndex: Object.keys(PostData).length }}
        >
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

        {PostData.map((postDetail, index) => {
          return (
            <div
              onMouseEnter={() => this.setState({ activeCard: postDetail.id })}
              onMouseLeave={() => this.setState({ activeCard: "mouseout-hover"})}
              key={postDetail.id + 1}
              id={postDetail.id + 1}
              style={{
                position: "relative",
                left: postDetail.id * 11 + "vmin"
              }}
            >
              <div
                className={
                  "page active " +
                  (this.state.activeCard === postDetail.id
                    ? "active-hover"
                    : null)
                }
                style={{
                  zIndex: 10 - postDetail.id
                }} /* {this.inactivePageClass()} */
                /* onClick={()=>{this.setState({
                  showDescription:this.state.showDescription="visible"
                })}} */
              >
                <div className="magazineBorder">
                  <div className="textContent">
                    <img className="magazineImage" src={postDetail.image} />
                    <a
                      className={
                        "starName " +
                        (this.state.activeCard === postDetail.id
                          ? "straighten"
                          : null)
                      }
                    >
                      {postDetail.firstname}
                      <strong>{postDetail.lastname}</strong>
                    </a>
                    <div
                      className={
                        "star-description " +
                        (this.state.activeCard === postDetail.id
                          ? "visible"
                          : null)
                      }
                    >
                      <BrowserRouter>
                          <Route path={"/"+postDetail.firstname} component={indexPage}/>
                        </BrowserRouter>
                      {postDetail.content}
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="pageBottom">
                  {postDetail.id + 1} | THE <strong>LABELSTICKS</strong>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="navigationDock">
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
          <a className="navigateRight"
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
          </div> */}
      </div>
    );
  }
}

export default FlipBook;
