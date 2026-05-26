import s from '../style/Card.module.scss';
import { MdOutlineStar } from 'react-icons/md';
import { GoTag } from 'react-icons/go';
interface GitRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}
export const Card = ({ repo }: { repo: GitRepo }) => {
  const date = new Date(repo.updated_at).toISOString().split('T')[0];

  return (
    <div className={s.Card}>
      <div className={s.Cardtop}>
        <div className={s.some}>
          <div className={s.dotblock}>
            <span className={s.red}></span>
            <span className={s.yellow}></span>
            <span className={s.green}></span>
          </div>
          <div className={s.starBlock}>
            <span className={s.star}>
              <MdOutlineStar />
            </span>
            <span className={s.starnumber}>{repo.stargazers_count}</span>
          </div>
        </div>
        <div className={s.name}>vovakuchera74-max / {repo.name}</div>
        <div className={s.Linkword}>Link to</div>
        <div className={s.Linkk}>
          <a href={repo!.homepage} className={s.link} target="_blank">
            Preview
          </a>
          <a href={repo.html_url} className={s.link} target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className={s.cardbottom}>
        <div className={s.data}>
          <div className={s.data_name}>{repo.name}</div>
          <div className={s.data_data}>{date}</div>
        </div>
        <div className={s.description}>{repo.description}</div>
        {repo.language && (
          <div className={s.tags}>
            <span className={s.icon11}>
              <GoTag />
            </span>
            <span className={s.tag}>{repo.language}</span>
          </div>
        )}
      </div>
    </div>
  );
};
