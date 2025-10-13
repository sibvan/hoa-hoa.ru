import "./BookList.scss";
import BookItem from "../BookItem/BookItem";
import type { BookType } from "../../../types";

function BookList({ list }: { list: BookType[] }) {
  return (
    <ul className="book-list">
      {list.map((book: BookType) => (
        <BookItem key={book._id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
