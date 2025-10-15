import { useEffect, useRef, useState } from "react";
import "./Keyhole.scss";
import clsx from "clsx";
import mask from "../../../assets/uniq-formats/keyhole/mask.webp";

function Keyhole({ image }: { image: string }) {
  const [hideMask, setHideMask] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const root = document.documentElement;
    const gap = parseInt(getComputedStyle(root).getPropertyValue("--gap"));

    const img = imgRef.current;
    if (!img) return;
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
    "keyhole__img_show",
    "keyhole__mask",
    hideMask && "keyhole__mask_hide"
  );

  const imgClasses = clsx(
    "keyhole__img",
    "keyhole__img_garden",
    hideMask && "keyhole__img_show"
  );

  const showGarden = () => {
    setHideMask(!hideMask);
  };

  return (
    <div className="chapter__format keyhole">
      <div onClick={showGarden} className="keyhole__img-container">
        <img className={maskClasses} src={mask} alt="" />
        <img ref={imgRef} className={imgClasses} src={image} alt="" />
      </div>
      <p className="keyhole__alt">Нажми, чтобы заглянуть в замочную скважину</p>
    </div>
  );
}

export default Keyhole;
