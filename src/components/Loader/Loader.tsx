import "./Loader.scss";
import clsx from "clsx";
import alice from "../../assets/loader/alice.png";
import face from "../../assets/loader/face.png";
import arrows from "../../assets/loader/arrows.png";

function Loader({ error }: { error: boolean }) {
  const imgSrc = error ? alice : face;
  const rootDivClasses = clsx("loader", error && "loader_error");
  const h1Classes = clsx("loader__title", error && "loader__title_error");
  const pClasses = clsx("loader__text", error && "loader__text_error");

  return (
    <div className={rootDivClasses}>
      <div className="loader__clock">
        {!error && <img className="loader__clock-arrows" src={arrows} alt="" />}

        <img className="loader__clock-face" src={imgSrc} alt="" />
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
