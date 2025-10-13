import "./ChapterContent.scss";
import ChapterHero from "../ChapterHero/ChapterHero";
import ChapterParagraph from "../ChapterParagraph/ChapterParagraph";
import ChapterDialog from "../ChapterDialog/ChapterDialog";
import ChapterSeparator from "../ChapterSeparator/ChapterSeparator";
import ChapterVideo from "../ChapterVideo/ChapterVideo";
import ChapterPuzzle from "../ChapterPuzzle/ChapterPuzzle";
import ChapterQuote from "../ChapterQuote/ChapterQuote";
import ChapterNext from "../ChapterNext/ChapterNext";
import ChapterTerms from "../ChapterTerms/ChapterTerms";
import Keyhole from "../../UniqFormats/Keyhole/Keyhole";
import AliceFalling from "../../UniqFormats/AliceFalling/AliceFalling";
import RabbitClock from "../../UniqFormats/RabbitClock/RabbitClock";
import ChapterMeasures from "../ChapterMeasures/ChapterMeasures";
import RabbitHat from "../../UniqFormats/RabbitHat/RabbitHat";
import TallChange from "../../UniqFormats/TallChange/TallChange";
import type { Block, Chapter } from "../../../types";

function ChapterContent({
  content: { title, number, blocks, assetsUrl },
}: {
  content: Chapter;
}) {
  return (
    <div className="chapter">
      <div className="chapter__inner">
        <ChapterHero title={title} number={number} />

        {blocks.map((block: Block, id: number) => {
          switch (block.type) {
            case "Абзац":
              return <ChapterParagraph key={id} content={block.content} />;
            case "Диалог":
              return <ChapterDialog key={id} content={block.content} />;
            case "Разделитель":
              return <ChapterSeparator key={id} content={block.content} />;
            case "Видео":
              return <ChapterVideo key={id} content={block.content} />;
            case "Ребус":
              return (
                <ChapterPuzzle
                  key={id}
                  image={assetsUrl + block?.image?.path}
                  content={block.content}
                />
              );
            case "Уникальный":
              if (block.content === "Замочная скважина")
                return (
                  <Keyhole key={id} image={assetsUrl + block?.image?.path} />
                );
              else if (block.content === "Алиса падает")
                return (
                  <AliceFalling
                    key={id}
                    image={assetsUrl + block?.image?.path}
                  />
                );
              else if (block.content === "Изменение роста")
                return (
                  <TallChange key={id} image={assetsUrl + block?.image?.path} />
                );
              else if (block.content === "Часы кролика")
                return <RabbitClock key={id} />;
              else if (block.content === "Кролик выпрыгивает")
                return <RabbitHat key={id} />;
              else return null;

            case "Цитата":
              return <ChapterQuote key={id} content={block.content} />;

            case "Термины":
              return <ChapterTerms key={id} content={block.terms ?? []} />;

            case "Единицы измерения":
              return (
                <ChapterMeasures
                  key={id}
                  measures={block.measures}
                  content={block.content}
                />
              );
            default:
              return null;
          }
        })}

        <ChapterNext />
      </div>
    </div>
  );
}

export default ChapterContent;
