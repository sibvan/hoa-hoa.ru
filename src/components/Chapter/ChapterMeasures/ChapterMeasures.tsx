import type { MeasuresContent } from "../../../types";
import "./ChapterMeasures.scss";

function ChapterMeasures({ content, measures }: MeasuresContent) {

  
  return (
    <div className="chapter__format measures">
      <div className="measures__cards">
        {measures.map((item) => (
          <div key={item.measure} className="measures__card">
            {item.measure}
          </div>
        ))}
      </div>
      <p className="measures__alt">{content}</p>
    </div>
  );
}

export default ChapterMeasures;
