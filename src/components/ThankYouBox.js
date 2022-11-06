import illustration from "../images/illustration-thank-you.svg";

function ThankYouBox(props) {
  const rating = props.rating;
  return (
    <main>
      <img src={illustration} id="illustration-image"></img>
      <div id="rating-box">You selected {rating} out of 5</div>
      <h1 id="thank-you-header">Thank you!</h1>
      <p id="thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
export default ThankYouBox;
