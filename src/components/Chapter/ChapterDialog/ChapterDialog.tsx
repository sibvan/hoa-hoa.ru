import type { ChapterContent } from "../../../types";
import "./ChapterDialog.scss";

function ChapterDialog({ content }: ChapterContent) {
  return <p className="chapter__dialog">{content}</p>;
}

export default ChapterDialog;
