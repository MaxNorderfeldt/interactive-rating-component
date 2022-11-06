import illustration from "../images/illustration-thank-you.svg";
import "../styling/thankYouBox.css";
import "../styling/index.css";

function ThankYouBox() {
  return (
    <main>
      <img src={illustration} id="illustration-image"></img>
      <div id="rating-box">You selected 4 out of 5</div>
      <h1 id="thank-you-header">Thank you!</h1>
      <p id="thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
export default ThankYouBox;
