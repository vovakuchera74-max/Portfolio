import { Git } from '../API/Api';
import s from '../style/Project.module.scss';
import { useQuery } from '@tanstack/react-query';
import { FiGithub } from 'react-icons/fi';
import { Top } from '../components/ProjectTop';
import { Card } from '../components/Card';
export const Projects = () => {
  const { data} = useQuery({
    queryKey: ['Git'],
    queryFn: () => Git(),
  });

  console.log(data);

  return (
    <div className={s.ContainerProjects}>
      <Top></Top>
      <div className={s.main}>
        <span className={s.icon2}>
          <FiGithub />
        </span>
        <span className={s.Projt}>My Projects</span>
      </div>
      <div className={s.bottom}>
        {data?.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
