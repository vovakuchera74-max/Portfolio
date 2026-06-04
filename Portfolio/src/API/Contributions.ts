import  type {ContributionsResponse} from "../types/Git"
const ContributionsApi =
  'https://github-contributions-api.jogruber.de/v4/vovakuchera74-max?y=last';


export const contributions = async (): Promise<ContributionsResponse> => {
  const res = await fetch(ContributionsApi);
  const data = await res.json();

  return data;
};
