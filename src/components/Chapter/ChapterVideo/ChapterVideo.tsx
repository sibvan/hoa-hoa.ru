import type { ChapterContent } from "../../../types";
import "./ChapterVideo.scss";

function ChapterVideo({ content }: ChapterContent) {
  return (
    <div className="chapter__format video">
      <iframe
        width="100%"
        height="100%"
        src={content}
        allow="fullscreen https://www.youtube.com"
      ></iframe>
    </div>
  );
}

export default ChapterVideo;
