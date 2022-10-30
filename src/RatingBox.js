import "./styling/ratingbox.css";
import logo from "./images/icon-star.svg";

function RatingBox() {
  return (
    <main>
      <div className="circle" id="star">
        <img src={logo} id="star-image"></img>
      </div>
      <div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div id="five-circles">
        <div className="circle number">1</div>
        <div className="circle number">2</div>
        <div className="circle number">3</div>
        <div className="circle number">4</div>
        <div className="circle number">5</div>
      </div>
      <div id="submit-button">SUBMIT</div>
    </main>
  );
}

export default RatingBox;
