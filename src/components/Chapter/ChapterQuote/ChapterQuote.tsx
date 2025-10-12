import "./ChapterQuote.scss";

function ChapterQuote({ content }) {
  return <div className="chapter__format quote">
    <p className="quote__text">{content}</p>
    <p className="quote__quote-sign">”</p>
    </div>;
}

export default ChapterQuote;
