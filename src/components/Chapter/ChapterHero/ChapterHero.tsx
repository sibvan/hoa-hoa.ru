import "./ChapterHero.scss";

function ChapterHero({title, number}) {
  return (
    <div className="chapter__hero">
      <p className="chapter__number">{number}</p>
      <h1 className="chapter__title">{title}</h1>
    </div>
  );
}

export default ChapterHero;
