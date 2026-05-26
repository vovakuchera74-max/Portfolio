const ContributionsApi = 'https://github-contributions-api.jogruber.de/v4/vovakuchera74-max?y=last'
interface Contribut{
        date:string;
        count:number;
        level:number
}
interface ContributionsResponse {
  contributions: Contribut[];
  total: Record<string, number>;
}

export const contributions = async():Promise<ContributionsResponse> =>{
    const res = await fetch(ContributionsApi)
    const data = await res.json()


    return data
}