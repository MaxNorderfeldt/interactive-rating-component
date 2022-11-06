import RatingBox from "./components/RatingBox";
import ThankYouBox from "./components/ThankYouBox";
import React, { useState } from "react";

import "./styling/ratingbox.css";
import "./styling/thankYouBox.css";
import "./styling/index.css";
import "./styling/mobile.css";

function App() {
  const [rating, setRating] = useState(0);

  return rating ? (
    <ThankYouBox rating={rating} />
  ) : (
    <RatingBox setRating={setRating} />
  );
}

export default App;
