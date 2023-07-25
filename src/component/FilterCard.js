import Button from "react-bootstrap/Button";
import { React } from "react";

import StarRatingComponent from "react-star-rating-component";
// we get props from component App :handle rate(function that handle value of rate),
//myHandleSearch(function that gived to button search), toSearch(input where we write the title of movie to search,)
const FilterCard = ({ handleRate, myHandleSearch, toSearch }) => {
  return (
    <div
      style={{
        fontFamily: "Roboto sansSerif",
        paddingTop: 10,
        margin: "auto",
         fontSize: 20 ,
        width: "50%",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <input placeholder="Search" ref={toSearch} type="search" />
      </div>
      <div>
        {/* importstyle of button from bootstrap */}
        <Button variant="light" onClick={myHandleSearch}>
          Search
        </Button>
      </div>
      <div>
        <StarRatingComponent
          name="rate"
          starCount={5}
          onStarClick={(value) => handleRate(value)}
        />
      </div>
    </div>
  );
};

export default FilterCard;
