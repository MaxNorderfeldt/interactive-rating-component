import "./styling/ratingbox.css";
import logo from "./images/icon-star.svg";

function RatingBox() {
  return (
    <main>
      <div className="circle">
        <img src={logo} id="star"></img>
      </div>
      <div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <section id="five-circles">
        <div className="circle">
          <p>1</p>
        </div>
        <div className="circle">2</div>
      </section>
    </main>
  );
}

export default RatingBox;
