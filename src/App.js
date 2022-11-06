import RatingBox from "./components/RatingBox";
import ThankYouBox from "./components/ThankYouBox";
import React, { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return rating ? <ThankYouBox /> : <RatingBox setRating={setRating} />;
}

export default App;
