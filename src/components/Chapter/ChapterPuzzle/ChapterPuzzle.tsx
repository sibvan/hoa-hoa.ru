import type { PuzzleContent } from "../../../types";
import "./ChapterPuzzle.scss";

function ChapterPuzzle({ content, image }: PuzzleContent) {
  return (
    <div className="chapter__format puzzle">
      <img className="puzzle__img" src={image} alt="" />
      <p className="puzzle__alt">{content}</p>
    </div>
  );
}

export default ChapterPuzzle;
