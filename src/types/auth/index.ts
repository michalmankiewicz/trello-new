export type LogInData = {
  login: string;
  password: string;
};

export type SignUpData = {
  name: string;
  login: string;
  password: string;
};

export type User = {
  userId: string;
  iat: number;
  login: string;
} | null;
