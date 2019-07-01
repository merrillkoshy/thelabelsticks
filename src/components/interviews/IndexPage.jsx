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
    const allStarsListJSON=JSON.parse(localStorage.getItem("stars")); 
    const item=allStarsListJSON.find(item => {return item.firstname === this.props.match.params.id;});
    const { firstname, lastname } = item;
    document.title = `${firstname.toUpperCase()} ${lastname.toUpperCase()} | The Label Sticks`;
  }   

  render() {  
    const allStarsListJSON=JSON.parse(localStorage.getItem("stars"));   
    const starDetailsJSON=JSON.parse(localStorage.getItem("starsDetails"));
    const item=allStarsListJSON.find(item => {return item.firstname === this.props.match.params.id;});
    const itemDetail=starDetailsJSON.find(itemDetail => {return itemDetail.firstname === this.props.match.params.id;});
    const questionArray=itemDetail.questionnaire;
    questionArray.forEach(element => {
      console.log(element.question)
    });
    return (
      <div style={{ position: "absolute" }}>
        <div className="intro-cover-black" />
            <div className="introCover">
            <video autoPlay muted loop className="backgroundVideo">
            <source src="https://thelabelsticks.com/assets/ourstars/ramp.mp4" type="video/mp4"/>
              </video>
              <h1>
                {item.id} | {item.firstname + " " + item.lastname}
              </h1> 
              <div className="content-container">
                <div 
                  className="introPara"
                  dangerouslySetInnerHTML={{ __html:  itemDetail.startingPara  }}
                />
                </div>    
                {questionArray.forEach(element => {  return(          
                <div className="content-container" style={{top: '0px',right: '0',margin: '1vmin 2vmin'}}>
                <div 
                  className="questions" 
                  dangerouslySetInnerHTML={{ __html:  element.question  }}
                />
                </div>);})}
            </div>
      </div>
    );
  }
}

export default IndexPage;
