import { categoryType } from "./category";
import { SizeType } from "./size";

export interface ProductProps {
  status: string;
  result: number;
  data: { product: productType[] };
}

export interface productType {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  discountPrice?: number;
  slug: string;
  images: string[];
  category: string;
  size: SizeType[] | string;
  isFeatured?: boolean;
  outOfStock?: boolean;
  description?: string;
}
