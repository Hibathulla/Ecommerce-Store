// export interface Rootobj {
//   status: string;
//   result: number;
//   data: Data;
// }

export interface TOrder {
  order: Order[];
}

interface Order {
  _id: string;
  paymentId: string;
  orderId: string;
  createdAt: string;
  status: string;
  isPaid: boolean;
  user: string;
  total: number;
  discount: number;
  products: Product[];
  id: string;
}

interface Product {
  name: string;
  category: string;
  size: string;
  id: string;
  images: string[];
  description: string;
  price: number;
  _id: string;
}
