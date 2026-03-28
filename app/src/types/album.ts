export type Photo = {
  id: string;
  url: string;
  timestamp?: string;
};

export type Album = {
  id: string;
  title: string;
  year: string;
  coverImage: string;
  photos: Photo[];
  createdAt: string;
  memoryCount?: number;
};