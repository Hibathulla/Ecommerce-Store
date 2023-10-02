export interface categoryType {
  createdAt: Date;
  category: string;
  billboard?: string;
  billboardLabel?: string;
}

export interface CategoryProps {
  status: string;
  result: number;
  data: Data;
}

export interface SingleCategoryProps {
  status: string;
  result: number;
  data: SingleDataCategory;
}

export interface SingleDataCategory {
  category: Category;
}

interface Data {
  category: Category[];
}

interface Category {
  _id: string;
  createdAt: string;
  category: string;
  billboard: string;
  billboardLabel: string;
  slug: string;
  id: string;
}
