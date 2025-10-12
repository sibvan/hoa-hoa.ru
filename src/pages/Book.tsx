import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData, assetsUrl } from "../utils/api";
import ChapterContent from "../components/Chapter/ChapterContent/ChapterContent";
import Loader from "../components/Loader/Loader";

function Book() {
  const params = useParams();

  const [chapter, setChapter] = useState({
    number: null,
    title: "",
    blocks: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [book, setBook] = useState([]);

  const bookTitle = params.book
    .split("-")
    .map((word, id) =>
      id === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");

  const bookChapter = Number(params.chapter.replace("chapter-", ""));

  const chapterNumber =
    chapter.number < 10 ? "0" + chapter.number : chapter.number;

  const getChapter = async () => {
    const chapter = await getData({
      data: bookTitle,
      filter: ["number", bookChapter],
      fields: ["number", "title", "blocks"],
    });

    setChapter(chapter[0]);
  };

  const getTitle = async () => {
    const book = await getData({
      data: "books",
      filter: ["slug", params.book],
      fields: ["title", "subtitle"],
    });

    setBook(book[0]);
  };

  useEffect(() => {
    if (book.length === 0) return;
    document.title = `${book.title} ${book.subtitle}. Глава ${bookChapter}. «${chapter.title}»`;
    console.log(
      `${book.title} ${book.subtitle}. Глава ${bookChapter}. «${chapter.title}»`
    );
  }, [book]);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        await getChapter();
        await getTitle();
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
      {!isLoading && !hasError && (
        <ChapterContent
          content={{ ...chapter, number: chapterNumber, assetsUrl: assetsUrl }}
        />
      )}
    </>
  );
}

export default Book;
