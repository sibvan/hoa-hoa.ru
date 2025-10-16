import "./RabbitHat.scss";
import hat from "../../../assets/uniq-formats/rabbit-hat/hat.webp";
import rabbit from "../../../assets/uniq-formats/rabbit-hat/rabbit.webp";
import { useEffect, useRef } from "react";

function RabbitHat() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const blockRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !blockRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.classList.add("rabbit-hat__rabbit_show");
          } else {
            img.classList.remove("rabbit-hat__rabbit_show");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    observer.observe(blockRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={blockRef} className="chapter__format">
      <div className="rabbit-hat">
        <img ref={imgRef} className="rabbit-hat__rabbit" src={rabbit} alt="" />
        <img className="rabbit-hat__hat_placeholder" src={hat} alt="" />
        <img className="rabbit-hat__hat" src={hat} alt="" />
      </div>
    </div>
  );
}

export default RabbitHat;
