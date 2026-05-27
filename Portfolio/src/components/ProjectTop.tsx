import { useQuery } from '@tanstack/react-query';
import { contributions } from '../API/Contributions';
import s from '../style/PrjTop.module.scss';
import  type {Contribut} from "../type/Git"


const groupIntoWeeks = (c: Contribut[]) => {
  const weeks: (Contribut | null)[][] = [];
  let week: (Contribut | null)[] = [];

  c.forEach((day, i) => {
    const dayOfWeek = new Date(day.date).getDay();
    if (i === 0) {
      for (let p = 0; p < dayOfWeek; p++) {
        week.push(null);
      }
    }

    week.push(day);
    if (dayOfWeek === 6 || i === c.length - 1) {
      weeks.push(week);
      week = [];
    }
  });
  return weeks;
};
const COLORS = ['#d4d4d4', '#b0b0b0', '#888888', '#444444', '#ffffff10'];
export const Top = () => {
  const { data } = useQuery({
    queryKey: ['contribution'],
    queryFn: () => contributions(),
  });

  const c = data?.contributions;
  if (!c) return null;
  const weeks = groupIntoWeeks(c);

  return (
    <div className={s.top}>
      <div className={s.contributionBlock}>
        <div className={s.contribution}>
          {weeks.map((week, wi) => (
            <div key={wi} className={s.week}>
              {week.map((day, di) => (
                <div
                  key={di}
                  className={s.day}
                  style={{
                    background: day ? COLORS[day.level] : 'transparent',
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className={s.year}></div>
      </div>
    </div>
  );
};
