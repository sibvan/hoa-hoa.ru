import "./RabbitClock.scss";

import face from "../../../assets/uniq-formats/clock/face.webp";
import hand1 from "../../../assets/uniq-formats/clock/hand-1.webp";
import hand2 from "../../../assets/uniq-formats/clock/hand-2.webp";

function RabbitClock() {
  return (
    <div className="chapter__format rabbit-clock">
      <img className="rabbit-clock__hand rabbit-clock__hand_big" src={hand1} alt="" />
      <img className="rabbit-clock__hand rabbit-clock__hand_small" src={hand2} alt="" />
      <img className="rabbit-clock__face" src={face} alt="" />
    </div>
  );
}

export default RabbitClock;
