import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => setRating(index === rating ? 0 : index)}
            onMouseMove={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            size={40}
          />
        );
      })}
    </div>
  );
}
