export interface IBooks {
  _id: number;
  title: string;
  thumbnail: string;
  author: string;
  genre: string;
  rating?: number;
  published: string | Date;
  userId?: string;
  reviews?: string[];
}
