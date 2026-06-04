import { useState, useEffect } from 'react';
import s from '../styles/Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoGitBranch } from 'react-icons/io5';
import { RiTelegram2Line } from 'react-icons/ri';

export const Header = () => {
  const tags = ['div', 'img', 'span', 'form'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tags.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [tags.length]);

  return (
    <>
      <header className={s.Header}>
        <div className={s.logo}>
          <Link className={s.LinkLogo} to="/">
            <span className={s.bracket}>{'< '}</span>
            <span key={currentIndex} className={s.tagName}>
              {tags[currentIndex]}
            </span>
            <span className={s.bracket}>{' />'}</span>
          </Link>
        </div>

        <div className={s.buttons}>
          <div className={s.btn}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
              }
              to={'/'}
            >
              <span className={s.Banchlink}>
                <IoGitBranch size={19} />
              </span>
              <span className={s.text}>main</span>
            </NavLink>
          </div>
          <div className={s.btn}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
              }
              to={'/skils'}
            >
              <span className={s.Banchlink}>
                <IoGitBranch size={19} />
              </span>
              <span className={s.text}>feat/skills</span>
            </NavLink>
          </div>
          <div className={s.btn}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
              }
              to={'/project'}
            >
              <span className={s.Banchlink}>
                <IoGitBranch size={19} />
              </span>
              <span className={s.text}>release/projects</span>
            </NavLink>
          </div>
        </div>
        <div className={s.dropmenu} onClick={() => setIsOpen(true)}>
          <Menu className={s.Menu} size={28} strokeWidth={3}></Menu>
        </div>
      </header>
      {IsOpen && (
        <div className={s.overlay}>
          <div className={s.backdrop} onClick={() => setIsOpen(false)}></div>
          <div className={s.panel}>
            <div className={s.BLock}>
              <div className={s.Navigate}>
                <span className={s.NavigateText}>Navigation</span>
                <div className={s.button}>
                  <div className={s.btn}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
                      }
                      to={'/'}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={s.Banchlink}>
                        <IoGitBranch size={19} />
                      </span>
                      <span className={s.text}>main</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className={s.about}>
                <div className={s.btn}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
                    }
                    onClick={() => setIsOpen(false)}
                    to={'/'}
                  >
                    <span className={s.Banchlink}>
                      <IoGitBranch size={24} />
                    </span>
                    <span className={s.text}>main</span>
                  </NavLink>
                </div>
                <div className={s.btn}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
                    }
                    onClick={() => setIsOpen(false)}
                    to={'/skils'}
                  >
                    <span className={s.Banchlink}>
                      <IoGitBranch size={24} />
                    </span>
                    <span className={s.text}>feat/skills</span>
                  </NavLink>
                </div>
                <div className={s.btn}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${s.Link} ${s.LinkActiv}` : s.Link
                    }
                    onClick={() => setIsOpen(false)}
                    to={'/project'}
                  >
                    <span className={s.Banchlink}>
                      <IoGitBranch size={24} />
                    </span>
                    <span className={s.text}>release/projects</span>
                  </NavLink>
                </div>
              </div>
              <div className={s.social}>
                <div className={s.socialText}>Socials</div>
                <div className={s.socialTag}>
                  <a
                    href="https://github.com/vovakuchera74-max"
                    className={s.aaa}
                    target="_blank" rel="noopener"
                  >
                    <span>
                      <FaGithub className={s.soctag} size={28} />
                    </span>
                    <span className={s.spantext}>GitHub</span>
                  </a>
                  <a href="mailto:vovakuchera74@gmail.com" target="_blank" rel="noopener" className={s.aaa}>
                    <span>
                      <MdEmail className={s.soctag} size={28} />
                    </span>
                    <span className={s.spantext}>Email</span>
                  </a>
                  <a href="https://t.me/Darkdszxc" className={s.aaa} target="_blank" rel="noopener">
                    <span>
                      <RiTelegram2Line className={s.soctag} size={28} />
                    </span>
                    <span className={s.spantext}>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
