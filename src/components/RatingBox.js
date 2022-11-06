import "../styling/index.css";
import "../styling/ratingbox.css";

import logo from "../images/icon-star.svg";
import React, { useState, useRef } from "react";

function RatingBox(props) {
  const setRating = props.setRating;
  const tempRating = useRef(0);

  function handleClick(e) {
    console.log("test");
    tempRating.current = e.target.value;
  }

  function handleSubmit() {
    setRating(tempRating.current);
  }
  return (
    <main>
      <div className="circle" id="star">
        <img src={logo} id="star-image"></img>
      </div>
      <div>
        <h1 className="center-left" id="rating-header">
          How did we do?
        </h1>
        <p className="center-left">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div id="five-circles">
        <button
          value="1"
          className="circle number"
          tabIndex="0"
          onClick={(e) => handleClick(e)}
        >
          1
        </button>
        <button
          value="2"
          className="circle number"
          tabIndex="0"
          onClick={(e) => handleClick(e)}
        >
          2
        </button>
        <button
          value="3"
          className="circle number"
          tabIndex="0"
          onClick={(e) => handleClick(e)}
        >
          3
        </button>
        <button
          value="4"
          className="circle number"
          tabIndex="0"
          onClick={(e) => handleClick(e)}
        >
          4
        </button>
        <button
          value="5  "
          className="circle number"
          tabIndex="0"
          onClick={(e) => handleClick(e)}
        >
          5
        </button>
      </div>
      <button id="submit-button" onClick={handleSubmit}>
        SUBMIT
      </button>
    </main>
  );
}

export default RatingBox;
