import React, { Component } from "react";
// import PostData from "../../data/starsDetails.json";
import StarData from "../interviews/starInterviews.json";
import "./IndexPage.css";

const PostData = [];

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docTitle: ""
    };
  }
  componentDidMount() {
    const item = PostData.find(item => {
      return item.firstname === this.props.match.params.id;
    });
    const { firstname, lastname } = item;
    document.title = `${firstname.toUpperCase()} ${lastname.toUpperCase()} | The Label Sticks`;
  }

  render() {
    const item = PostData.find(item => {
      return item.firstname === this.props.match.params.id;
    });

    return (
      <div style={{ position: "absolute" }}>
        <div className="intro-cover-black" />
        <div className="introCover" />
        <h1>
          {item.id} | {item.firstname + " " + item.lastname}
        </h1>
        {StarData.map((starDetail, index) => {
          return (
            <div
              className="introPara"
              dangerouslySetInnerHTML={{ __html: starDetail.startingPara }}
            />
          );
        })}
      </div>
    );
  }
}

export default IndexPage;
