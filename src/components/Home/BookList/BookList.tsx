import "./BookList.scss";
import BookItem from "../BookItem/BookItem";

function BookList({ list }) {
  return (
    <ul className="book-list">
      {list.map((book) => (
        <BookItem key={book._id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
