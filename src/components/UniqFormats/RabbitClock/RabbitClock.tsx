import "./RabbitClock.scss";
import circle from "../../../assets/uniq-formats/clock/circle.png";
import clock from "../../../assets/uniq-formats/clock/clock.jpg";

function RabbitClock() {
  return <div className="chapter__format rabbit-clock">

<img className="rabbit-clock__circle" src={circle} alt="" />
<img className="rabbit-clock__clock" src={clock} alt="" />

  </div>;
}

export default RabbitClock;
