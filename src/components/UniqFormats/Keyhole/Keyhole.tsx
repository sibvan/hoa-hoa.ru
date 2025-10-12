import { useEffect, useRef, useState } from "react";
import "./Keyhole.scss";
import clsx from "clsx";
import mask from "../../../assets/uniq-formats/keyhole/mask.png";

function Keyhole({ image }) {
  const [hideMask, setHideMask] = useState(false);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const root = document.documentElement;
    const gap = parseInt(getComputedStyle(root).getPropertyValue("--gap"));

    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * gap * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * gap * 2;
    img.style.transform = `translate(-50%, -50%) translate(${-x}px, ${-y}px)`;
  };

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.addEventListener("mousemove", handleMouseMove);
          } else {
            img.removeEventListener("mousemove", handleMouseMove);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(img);

    return () => {
      observer.disconnect();
      img.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const maskClasses = clsx(
    "keyhole__img",
    "keyhole__mask",
    hideMask && "keyhole__mask_hide"
  );

  const showGarden = () => {
    setHideMask(!hideMask);
  };

  return (
    <div className="chapter__format keyhole">
      <div onClick={showGarden} className="keyhole__img-container">
        <img className={maskClasses} src={mask} alt="" />
        <img
          ref={imgRef}
          className="keyhole__img keyhole__img_garden"
          src={image}
          alt=""
        />
      </div>
      <p className="keyhole__alt">Нажми, чтобы заглянуть в замочную скважину</p>
    </div>
  );
}

export default Keyhole;
