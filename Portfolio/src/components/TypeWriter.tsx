import s from '../style/Writer.module.scss';
import { useState, useEffect } from 'react';

const linesHTML = [
  "<span class='kw'>const</span> <span class='key'>developerProfile</span> = {",
  "  <span class='key'>name</span>: <span class='str'>'Vova'</span>,",
  "  <span class='key'>age</span>: <span class='num'>18</span>,",
  "  <span class='key'>stack</span>: [<span class='str'>'React'</span>, <span class='str'>'TypeScript'</span>, <span class='str'>'SCSS'</span>, <span class='str'>'Zustand'</span>, <span class='str'>'TanStack Query'</span>],",
  "  <span class='key'>currentGoal</span>: <span class='str'>'Build Portfolio, Anime Directory & Weather Projects'</span>,",
  "  <span class='key'>focus</span>: <span class='str'>'Modern & Responsive Web Design'</span>,",
  "  <span class='key'>Languages</span>: <span class='str'>'English & Ukrainian'</span>,",
  '};',
];

const linesPlain = [
  'const developerProfile = {',
  "  name: 'Vova',",
  '  age: 18,',
  "  stack: ['React', 'TypeScript', 'SCSS', 'Zustand', 'TanStack Query'],",
  "  currentGoal: 'Build Portfolio, Anime Directory & Weather Projects',",
  "  focus: 'Modern & Responsive Web Design',",
  "  Languages: 'English & Ukrainian',",
  '};',
];

function sliceHTML(html: string, visibleCount: number): string {
  let visible = 0;
  let result = '';
  let i = 0;

  while (i < html.length && visible < visibleCount) {
    if (html[i] === '<') {
      const end = html.indexOf('>', i);
      result += html.slice(i, end + 1);
      i = end + 1;
    } else {
      result += html[i];
      i++;
      visible++;
    }
  }

  return result;
}

export const TypeWriter = () => {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= linesPlain.length) return;

    const timer = setTimeout(() => {
      const currentLine = linesPlain[lineIdx];

      if (charIdx < currentLine.length) {
        setCharIdx((prev) => prev + 1);
      } else {
        setLineIdx((prev) => prev + 1);
        setCharIdx(0);
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [charIdx, lineIdx]);

  const getDisplayed = () => {
    let result = '';
    for (let i = 0; i < lineIdx; i++) {
      result += linesHTML[i] + '\n';
    }
    if (lineIdx < linesHTML.length) {
      result += sliceHTML(linesHTML[lineIdx], charIdx);
    }
    return result;
  };

  return (
    <div className={s.Block}>
      <pre
        dangerouslySetInnerHTML={{
          __html: getDisplayed() + '<span class="cursor">|</span>',
        }}
      />
    </div>
  );
};
