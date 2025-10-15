import "./Loader.scss";
import clsx from "clsx";
import face from "../../assets/loader/face.webp";
import alice from "../../assets/loader/alice.webp";
import hand1 from "../../assets/loader/hand-1.webp";
import hand2 from "../../assets/loader/hand-2.webp";

function Loader({ error }: { error: boolean }) {
  const imgSrc = error ? alice : face;
  const rootDivClasses = clsx("loader", error && "loader_error");
  const h1Classes = clsx("loader__title", error && "loader__title_error");
  const pClasses = clsx("loader__text", error && "loader__text_error");
  const imgClasses = clsx(
    "loader__clock-face",
    error && "loader__clock-face_rotate"
  );

  return (
    <div className={rootDivClasses}>
      <div className="loader__clock">
        {!error && (
          <>
            <img
              className="loader__clock-hand loader__clock-hand_big"
              src={hand1}
              alt=""
            />
            <img
              className="loader__clock-hand loader__clock-hand_small"
              src={hand2}
              alt=""
            />
          </>
        )}

        <img className={imgClasses} src={imgSrc} alt="" />
      </div>
      <div className="loader__text">
        <h1 className={h1Classes}>{error ? "Ошибка" : "Загрузка"}</h1>
        <p className={pClasses}>
          {error ? "Перезагрузите страницу" : "Пожалуйста, подождите"}
        </p>
      </div>
    </div>
  );
}

export default Loader;
