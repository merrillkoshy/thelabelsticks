import React, { Component } from "react";
import "./IndexPage.css";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      clickedCard: "",
      readMore: "",
      revertCard: ""
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    const allStarsListJSON = JSON.parse(localStorage.getItem("stars"));
    const item = allStarsListJSON.find(item => {
      return item.firstname === this.props.match.params.id;
    });
    const { firstname, lastname } = item;
    document.title = `${firstname.toUpperCase()} ${lastname.toUpperCase()} | The Label Sticks`;
  }

  toggleMenu() {
    let isToggled = this.state.toggled;
    this.setState({ toggled: !isToggled });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate fired");
    console.log("STATE", this.state);
  }
  backButton = () => {
    this.setState({ clickedCard: "" });
    console.log(this.state.clickedCard);
  };

  render() {
    const allStarsListJSON = JSON.parse(localStorage.getItem("stars"));
    const starDetailsJSON = JSON.parse(localStorage.getItem("starsDetails"));
    const item = allStarsListJSON.find(item => {
      return item.firstname === this.props.match.params.id;
    });
    const itemDetail = starDetailsJSON.find(itemDetail => {
      return itemDetail.firstname === this.props.match.params.id;
    });
    const questionArray = itemDetail.questionnaire;

    return (
      <div style={{ position: "absolute" }}>
        <div className="intro-cover-black" />
        <div className="introCover">
          <video
            autoPlay
            muted
            loop
            className={"backgroundVideo " + this.state.readMore}
          >
            <source
              src="https://thelabelsticks.com/assets/ourstars/ramp.mp4"
              type="video/mp4"
            />
          </video>
          <h1>
            {item.id} | {item.firstname + " " + item.lastname}
          </h1>
          <div className={"content-container " + this.state.readMore}>
            <div
              className="introPara"
              dangerouslySetInnerHTML={{ __html: itemDetail.startingPara }}
            />
          </div>
          <div
            className={
              "coverForInterview " +
              this.state.readMore +
              (this.state.revertCard ? "inside" : "")
            }
            onClick={() => this.setState({ readMore: "readMore" })}
          >
            <div
              className="flashCardLogoContainer"
              style={{ position: "absolute", left: "calc(100% - 55vmin)" }}
            >
              <img
                src="https://thelabelsticks.com/assets/favicon.png"
                alt="The Label Sticks"
              />
            </div>
            <img
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: "12vmin"
              }}
              src="https://thelabelsticks.com/assets/ourstars/anita/anita-banner.jpg"
              alt="TLS-interview File"
            />
            <a
              style={{
                position: "absolute",
                bottom: "10vmin",
                left: "35vmin",
                color: "#e4c372"
              }}
            >
              THE INTERVIEW
            </a>
            <img
              style={{ width: "100%", height: "auto" }}
              id="id-logo"
              src="https://thelabelsticks.com/assets/cardBackground.png"
              alt="TLS-interview File"
            />
          </div>
          <div
            className={
              "questionnaire-container " +
              this.state.readMore +
              (this.state.revertCard ? "revert" : "")
            }
          >
            {questionArray.map((answer, i) => {
              return (
                <div
                  key={i + "a"}
                  onClick={this.toggleMenu}
                  className={
                    "flashCard " +
                    (this.state.clickedCard === answer.number
                      ? "flipped"
                      : "") +
                    (this.state.revertCard === answer.number ? "revert" : "")
                  }
                  style={{ left: 32 * i + "vmin" }}
                >
                  <div
                    onClick={() =>
                      this.setState({ clickedCard: answer.number })
                    }
                    className={
                      "flashCard-inner " +
                      (this.state.clickedCard === answer.number
                        ? "flipped"
                        : "") +
                      (this.state.revertCard === answer.number ? "revert" : "")
                    }
                  >
                    <div className="questions">
                      <div className="flashCardLogoContainer">
                        <img
                          src="https://thelabelsticks.com/assets/favicon.png"
                          alt="The Label Sticks"
                        />
                      </div>
                      <div
                        style={{ padding: "3vmin" }}
                        key={i}
                        dangerouslySetInnerHTML={{ __html: answer.question }}
                      />
                    </div>
                    <div className="answers">
                      <button
                        onClick={() => {
                          this.setState({ revertCard: answer.number });
                          this.setState({ readMore: "" });
                        }}
                      >
                        Go back
                      </button>
                      <div>{answer.question}</div>
                      <div
                        key={i + 1}
                        dangerouslySetInnerHTML={{ __html: answer.answer }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
