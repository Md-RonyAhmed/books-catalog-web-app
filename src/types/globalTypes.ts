export interface IBooks {
  _id: number;
  title: string;
  thumbnail: string;
  author: string;
  genre: string;
  rating?: number;
  published: Date;
  userId?: string;
  reviews?: string[];
}
