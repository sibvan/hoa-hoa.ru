import { useEffect, useState } from "react";
import BookList from "../components/Home/BookList/BookList";
import { getData, assetsUrl } from "../utils/api";
import Loader from "../components/Loader/Loader";
import type { BookType } from "../types";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getBooks = async () => {
    const books = await getData({
      data: "books",
      sort: "order",
      fields: [
        "_id",
        "title",
        "subtitle",
        "placeholder",
        "cover",
        "slug",
        "order",
      ],
    });

    const booksWithCovers = books.map((book: BookType) => ({
      ...book,
      cover:
        typeof book.cover === "string"
          ? assetsUrl + book.cover
          : assetsUrl + book.cover.path,
    }));

    setBooks(booksWithCovers);
  };

  useEffect(() => {
    document.title = "Интерактивные книги hoa-hoa";
    const loadContent = async () => {
      setIsLoading(true);
      try {
        await getBooks();
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  return (
    <>
      {(isLoading || hasError) && <Loader error={hasError} />}
      {books && <BookList list={books} />}
    </>
  );
}

export default Home;
