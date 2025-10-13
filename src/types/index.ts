type BookType = {
  _id: number;
  title: string;
  subtitle: string;
  placeholder: boolean;
  cover: string | { path: string };
  slug: string;
};

type PuzzleContent = {
  content: string;
  image: string;
};

type MeasuresContent = {
  content: string;
  measures: { measure: string }[];
};

type ApiData = {
  fields?: string[];
  data: string;
  filter?: [string, string | number];
  sort?: string;
};

type Term = {
  word: string;
  definition: string;
};

type Terms = {
  content: Term[];
};

type ChapterContent = {
  content: string;
};

type HeroContent = {
  title: string;
  number: string | number;
};

type Block = {
  content: string;
  image?: { path: string };
  terms?: Term[];
  measures: { measure: string }[]; 
  type: string;
};

type Chapter = {
  title: string;
  number: number | string;
  assetsUrl: string;
  blocks: Block[];
};

export type {
  BookType,
  Block,
  Chapter,
  ApiData,
  ChapterContent,
  HeroContent,
  MeasuresContent,
  PuzzleContent,
  Term,
  Terms,
};
