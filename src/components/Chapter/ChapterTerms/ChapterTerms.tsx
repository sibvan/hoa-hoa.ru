import type { Term, Terms } from "../../../types";
import "./ChapterTerms.scss";

function ChapterTerms({ content }: Terms) {
  return (
    <div className="chapter__format terms">
      {content.map((term: Term) => (
        <div className="terms__item" key={term.word}>
          <p className="terms__title">{term.word}</p>
          <div className="terms__definition">
            <div className="terms__mask"></div>
            <p className="terms__description">{term.definition}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChapterTerms;
