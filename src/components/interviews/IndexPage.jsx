import React, { Component } from "react";
import "./IndexPage.css";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docTitle: ""
    };
  }
  componentDidMount() {
    const allStarsListJSON = JSON.parse(localStorage.getItem("stars"));
    const item = allStarsListJSON.find(item => {
      return item.firstname === this.props.match.params.id;
    });
    const { firstname, lastname } = item;
    document.title = `${firstname.toUpperCase()} ${lastname.toUpperCase()} | The Label Sticks`;
  }

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
          <video autoPlay muted loop className="backgroundVideo">
            <source
              src="https://thelabelsticks.com/assets/ourstars/ramp.mp4"
              type="video/mp4"
            />
          </video>
          <h1>
            {item.id} | {item.firstname + " " + item.lastname}
          </h1>
          <div className="content-container">
            <div
              className="introPara"
              dangerouslySetInnerHTML={{ __html: itemDetail.startingPara }}
            />
          </div>
          <div className="questionnaire-container">
            {questionArray.map((answer, i) => {
              console.log(answer);
              // Return the element. Also pass key
              return (
                <div className="flashCard">
                  <div
                    className="questions"
                    key={i}
                    dangerouslySetInnerHTML={{ __html: answer.question }}
                  />
                  <div
                    className="answers"
                    key={i}
                    dangerouslySetInnerHTML={{ __html: answer.answer }}
                  />
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
