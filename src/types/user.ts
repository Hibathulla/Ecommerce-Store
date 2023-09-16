export interface userType {
  id?: string;
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  photo?: string;
}

export interface UserApi {
  status: string;
  data: Data;
}

interface Data {
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  __v: number;
  photo: string;
}

export interface UserData {
  status: string;
  message: string;
  token: string;
  data: Data;
}

interface Data {
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  __v: number;
  photo: string;
}
