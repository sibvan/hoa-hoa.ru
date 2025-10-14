import "./TallChange.scss";
import eatMe from "../../../assets/uniq-formats/tall-change/eat-me.webp";
import drinkMe from "../../../assets/uniq-formats/tall-change/drink-me.webp";
import { useRef, useState } from "react";

function TallChange({ image }: {image: string}) {
  const imgRef = useRef(null);
  const [width, setWidth] = useState(20);

  const increase = () => {
    if (width >= 100) return;
    const newWidth = width + 1;
    setWidth(newWidth);
  };

  const decrease = () => {
    if (width <= 10) return;
    const newWidth = width - 1;
    setWidth(newWidth);
  };

  return (
    <div className="chapter__format tall-change">
      <div
        onClick={decrease}
        className="tall-change__button tall-change__button_drink"
      >
        <img src={drinkMe} alt="" />
      </div>

      <div className="tall-change__inner">
        <img
          style={{ width: `${width}%` }}
          ref={imgRef}
          className="tall-change__alice"
          src={image}
          alt=""
        />
      </div>

      <div
        onClick={increase}
        className="tall-change__button tall-change__button_eat"
      >
        <img src={eatMe} alt="" />
      </div>
    </div>
  );
}

export default TallChange;
