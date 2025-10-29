export type Artist = {
  slug: string;
  name: string;
  bio: string;
  cover: string;
  works: Artwork[];
};

export type Artwork = {
  id: string;
  title: string;
  technique: string;
  size: string;
  price: number;
  image: string;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
};
