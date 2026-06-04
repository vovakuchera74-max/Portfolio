import { useState } from 'react';
import s from '../styles/SkillsBoottom.module.scss';
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

export const SkillsBootom = () => {
  const [isFilt, setisFilt] = useState('All');
  return (
    <div className={s.SkillsBootom}>
      <div className={s.SkillsLinks}>
        <button
          onClick={() => setisFilt('All')}
          className={isFilt === 'All' ? s.activeBtnn : s.btnn}
        >
          All
        </button>
        <button
          onClick={() => setisFilt('Frontend')}
          className={isFilt === 'Frontend' ? s.activeBtnn : s.btnn}
        >
          Frontend
        </button>
        <button
          onClick={() => setisFilt('Backend')}
          className={isFilt === 'Backend' ? s.activeBtnn : s.btnn}
        >
          Backend
        </button>
        <button
          onClick={() => setisFilt('Tools')}
          className={isFilt === 'Tools' ? s.activeBtnn : s.btnn}
        >
          Tools
        </button>
      </div>
      <div className={s.Skillsbloc}>
        {isFilt === 'All' && (
          <div className={s.allGrid}>
            <div className={s.card}>
              <span className={s.textt}>Frontend</span>
              <div className={s.icons}>
                <a
                  href="https://uk.wikipedia.org/wiki/React"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaReact />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/TypeScript"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <SiTypescript />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/JavaScript"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaJs />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/CSS"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaCss3Alt />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/HTML"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaHtml5 />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/Sass"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <SiSass />
                </a>
              </div>
            </div>
            <div className={s.card}>
              <span className={s.textt}>Tools</span>
              <div className={s.icons}>
                <a
                  href="https://uk.wikipedia.org/wiki/Vite"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <TbBrandVite />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/GitHub"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://uk.wikipedia.org/wiki/Git"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <FaGitAlt />
                </a>
              </div>
            </div>
            <div className={s.card}>
              <span className={s.textt}>Backend</span>
              <div className={s.icons}>{/* поки порожньо */}</div>
            </div>
            <div className={s.card}>
              <span className={s.textt}>Libraries</span>
              <div className={s.icons}>
                <a
                  href="https://react-hook-form.com"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <SiReacthookform />
                </a>
                <a
                  href="https://tanstack.com/query/latest"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <SiReactquery />
                </a>
                <a
                  href="https://reactrouter.com"
                  className={s.Item}
                  target="_blank"
                  rel="noopener"
                >
                  <SiReactrouter />
                </a>
              </div>
            </div>
          </div>
        )}
        {isFilt === 'Frontend' && (
          <div className={s.card}>
            <span className={s.textt}>Frontend</span>
            <div className={s.icons}>
              <a
                href="https://uk.wikipedia.org/wiki/React"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaReact />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/TypeScript"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiTypescript />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/JavaScript"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaJs />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/CSS"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaCss3Alt />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/HTML"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaHtml5 />
              </a>
              <a
                href="https://react-hook-form.com"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReacthookform />
              </a>
              <a
                href="https://tanstack.com/query/latest"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReactquery />
              </a>

              <a
                href="https://uk.wikipedia.org/wiki/Sass"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiSass />
              </a>
              <a
                href="https://reactrouter.com"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReactrouter />
              </a>
            </div>
          </div>
        )}
        {isFilt === 'Backend' && (
          <div className={s.card}>
            <span className={s.textt}>Backend</span>
            <div className={s.icons}>{/* поки порожньо */}</div>
          </div>
        )}
        {isFilt === 'Tools' && (
          <div className={s.card}>
            <span className={s.textt}>Tools</span>
            <div className={s.icons}>
              <a
                href="https://uk.wikipedia.org/wiki/Vite"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <TbBrandVite />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/GitHub"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaGithub />
              </a>
              <a
                href="https://uk.wikipedia.org/wiki/Git"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <FaGitAlt />
              </a>
              <a
                href="https://react-hook-form.com"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReacthookform />
              </a>
              <a
                href="https://tanstack.com/query/latest"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReactquery />
              </a>
              <a
                href="https://reactrouter.com"
                className={s.Item}
                target="_blank"
                rel="noopener"
              >
                <SiReactrouter />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
