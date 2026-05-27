import  type {GitRepo} from "../type/Git"
const API = 'https://api.github.com/users/vovakuchera74-max/repos';



export const Git = async (): Promise<GitRepo[]> => {
  const res = await fetch(API);
  if (!res.ok) throw new Error('Failed to fetch repos');
  const repos = await res.json();
  return repos;
};
