import "./BookItem.scss";
import type { BookType } from "../../../types";
import { Link } from "react-router";

function BookItem({
  book: { title, placeholder, subtitle, cover, slug },
}: {
  book: BookType;
}) {
  const LinkToBook = slug + "/chapter-1";

  
  return placeholder ? (
    <li className="book book_placeholder"></li>
  ) : (
    <li className="book">
      <Link
        className="book__link"
        to={LinkToBook}
        state={{ title: title + " " + subtitle }}
      >
        <div>
          <h1 className="book__title">{title}</h1>
          <p className="book__subtitle">{subtitle}</p>
        </div>
        <div className="book__img-container">
          <img
            className="book__img"
            src={typeof cover === "string" ? cover : cover.path}
            alt=""
          />
        </div>
      </Link>
    </li>
  );
}

export default BookItem;
