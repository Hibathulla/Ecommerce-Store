import { categoryType } from "./category";
import { sizeType } from "./size";

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
  category: categoryType;
  size: sizeType[] | string;
  isFeatured?: boolean;
  outOfStock?: boolean;
  description?: string;
}
