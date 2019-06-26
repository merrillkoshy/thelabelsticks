import React from "react";
import PostData from "../flipbook/starsDetails.json";
import StarData from "../interviews/starInterviews.json";

const IndexPage = props => {
  const item = PostData.find(item => {
    return item.firstname === props.match.params.id;
  });

  return (
    <div>
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
};

export default IndexPage;
