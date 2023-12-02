import css from './Statistics.module.css';
import clsx from 'clsx';
import {getRandomBgColor} from 'random-color/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={clsx(css.statistics)}>
      <h2 className={clsx(css.title)}>{title}</h2>

      <ul className={clsx(css.statList)}>
        {stats.map(stat => (
          <li key={stat.id} className={clsx(css.item)} style={{backgroundColor:getRandomBgColor()}}>
            <span className={clsx(css.label)}>{stat.label}</span>
            <span className={clsx(css.percentage)}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
