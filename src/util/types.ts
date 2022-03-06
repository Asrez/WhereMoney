export interface Token {
  token: string;
}

export interface Nav {
  username: string;
  handleLogout: () => void;
}

export interface Auth {
  auth: boolean;
}

export interface Trans {
  account_number: string;
  calculate_in_monthly: boolean;
  description: string;
  destination: string;
  id: number;
  is_income: true;
  price: number;
  source: string;
  created_date: string;
}

export interface User {
  username: string;
  token: string;
}

export interface Balance {
  total_income: number;
  total_outcome?: number;
  balance: number;
}

export interface SignComponenet {
  signup: ({
    email,
    firstName,
    lastName,
    password,
    username,
  }: Sign) => Promise<void>;
  error: boolean;
}

export interface Sign {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}
