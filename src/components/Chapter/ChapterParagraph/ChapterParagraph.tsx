import type { ChapterContent } from "../../../types";
import "./ChapterParagraph.scss";

function ChapterParagraph({ content }: ChapterContent) {
  return <p className="chapter__paragraph">{content}</p>;
}

export default ChapterParagraph;
