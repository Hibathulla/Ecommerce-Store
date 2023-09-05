import { categoryType } from "./category";
import { sizeType } from "./size";

export interface productType {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  discountPrice?: number;
  slug: string;
  images: string[];
  category: categoryType;
  size: sizeType[];
  isFeatured?: boolean;
  outOfStock?: boolean;
  description?: string;
}
