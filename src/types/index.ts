type Book = {
  id: number;
  title: string;
  subtitle: string;
  placeholder: boolean;
  cover: string;
  slug: string;
};

type ApiData = {
  fields: string[];
  data: string;
  filter: [string, string];
  sort: string;
};

type Block = {
  content: string;
  image?: { path: string };
  terms?: { word: string; definition: string }[];
  measures: { measure: string }[];
  type: string;
};

type Chapter = {
  title: string;
  number: string;
  assetsUrl: string;
  blocks: Block[];
};

export type { Book, Block, Chapter, ApiData };
