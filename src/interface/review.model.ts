// review.model.ts

export interface Review {
  id: string;
  username: string;
  star: number; // Change the type to string
  comment: string;
  permission: number;
  role: string;
  rom: string;
  price: string;
  img: string;
  date: string;
  clock: string;
}
