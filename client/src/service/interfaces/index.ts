export interface Login {
  email: string;
  password: string;
}

export interface Company {
  id?: string;
  name: string;
  price: number;
}

export interface Contacts {
  id?: string;
  name: string;
  email: string;
  personalNumber: number;
  phone: string;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  personalNumber?: number;
  password?: string;
  role?: string;
}
