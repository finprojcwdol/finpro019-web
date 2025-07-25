export interface Session {
  user: {
    id: string;
    name: string;
    username?: string;
    email: string;
    avatar: string;
    role: string | null;
    referralCode: string | null;
    points: string | null;
  };
  userToken?: string;
  expires?: string;
}
