const API = "https://api.github.com/users/vovakuchera74-max/repos"

interface GitRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export const Git = async (): Promise<GitRepo[]> => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch repos");
  const repos = await res.json();
  return repos;
};