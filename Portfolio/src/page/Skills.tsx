import s from '../style/Skills.module.scss';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaJs } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiReacthookform } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { SiSass } from 'react-icons/si';
import { SiReactrouter } from 'react-icons/si';
import { SkillsBootom } from '../components/Skillsinformation';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={s.scrol}>
        <div className={s.scrolitem}>
          <a
            href="https://uk.wikipedia.org/wiki/React"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaReact />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/TypeScript"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiTypescript />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/JavaScript"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaJs />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/CSS"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaCss3Alt />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/HTML"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaHtml5 />
          </a>
          <a
            href="https://react-hook-form.com"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReacthookform />
          </a>
          <a
            href="https://tanstack.com/query/latest"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReactquery />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Vite"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <TbBrandVite />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/GitHub"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaGithub />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Git"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaGitAlt />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Sass"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiSass />
          </a>
          <a
            href="https://reactrouter.com"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReactrouter />
          </a>

          <a
            href="https://uk.wikipedia.org/wiki/React"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaReact />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/TypeScript"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiTypescript />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/JavaScript"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaJs />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/CSS"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaCss3Alt />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/HTML"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaHtml5 />
          </a>
          <a
            href="https://react-hook-form.com"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReacthookform />
          </a>
          <a
            href="https://tanstack.com/query/latest"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReactquery />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Vite"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <TbBrandVite />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/GitHub"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaGithub />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Git"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <FaGitAlt />
          </a>
          <a
            href="https://uk.wikipedia.org/wiki/Sass"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiSass />
          </a>
          <a
            href="https://reactrouter.com"
            className={s.item}
            target="_blank"
            rel="noopener"
          >
            <SiReactrouter />
          </a>
        </div>
      </div>
      <SkillsBootom></SkillsBootom>
    </div>
  );
};
