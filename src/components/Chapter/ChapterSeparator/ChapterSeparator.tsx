

import type { ChapterContent } from "../../../types";
import "./ChapterSeparator.scss";

function ChapterSeparator({ content }: ChapterContent) {
  return <p className="chapter__format separator">{content}</p>;
}

export default ChapterSeparator;
