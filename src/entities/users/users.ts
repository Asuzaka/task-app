export type User = {
  id: string;
  username: string;
  email: string;
  last_seen: string; // or `Date` if you parse it
  created_at?: string; // optional if sometimes missing
  blocked: boolean;
};
