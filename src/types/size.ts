export interface SizeType {
  id?: string;
  name: string;
  value: string;
  createdAt: Date;
}

// export interface SizeProps {
//   status: string;
//   result: number;
//   data: Data;
// }

export interface SizeProps {
  size: Size[];
}

interface Size {
  _id: string;
  createdAt: string;
  name: string;
  value: string;
  id: string;
}
