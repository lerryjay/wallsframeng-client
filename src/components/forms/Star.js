import React from "react";
import StarRating from "react-star-ratings";

const Star = ({ starClick, numberOfStars }) => (
  <>
    <StarRating
      changeRating={() => starClick(numberOfStars)}
      numberOfStars={numberOfStars}
      starDimension="12px"
      starSpacing="2px"
      starHoverColor="green"
      starEmptyColor="grey"
    />
    <br />
  </>
);

export default Star;
