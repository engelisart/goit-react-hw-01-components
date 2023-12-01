import css from './Profile.module.css'
import clsx from 'clsx'

export const Profile = ({username,tag,location,avatar,stats}) => {
    return <div className={clsx(css.profile)}>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className={clsx(css.avatar)}
      />
      <p className={clsx(css.name)}>{username}</p>
      <p className={clsx(css.tag)}>{tag}</p>
      <p className={clsx(css.location)}>{location}</p>
    </div>
  
    <ul className={clsx(css.stats)}>
      <li className={clsx(css.item)}>
        <span className={clsx(css.label)}>Followers</span>
        <span className={clsx(css.quantity)}>{stats.followers}</span>
      </li>
      <li className={clsx(css.item)}>
        <span className={clsx(css.label)}>Views</span>
        <span className={clsx(css.quantity)}>{stats.views}</span>
      </li>
      <li className={clsx(css.item)}>
        <span className={clsx(css.label)}>Likes</span>
        <span className={clsx(css.quantity)}>{stats.likes}</span>
      </li>
    </ul>
  </div>
}


