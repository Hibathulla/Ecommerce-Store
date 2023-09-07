export interface reviewType {
  status: string;
  result: number;
  data: Data;
}

interface Data {
  review: Review[];
}

interface Review {
  _id: string;
  review: string;
  rating: number;
  createdAt: string;
  user: User;
  product: string;
  id: string;
}

interface User {
  _id: string;
  name: string;
  photo: string;
}
