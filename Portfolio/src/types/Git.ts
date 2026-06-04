export interface GitRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}
export interface Contribut {
  date: string;
  count: number;
  level: number;
}
export interface ContributionsResponse {
  contributions: Contribut[];
  total: Record<string, number>;
}