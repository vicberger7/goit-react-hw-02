import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.userInfo}>
        <div className={css.imgContainer}>
          <img className={css.img} src={image} alt="User avatar" />
        </div>
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li>
          <span>Followers</span>
          <div>
            <span className={css.userNum}>{stats.followers}</span>
          </div>
        </li>
        <li>
          <span>Views</span>
          <div>
            <span className={css.userNum}>{stats.views}</span>
          </div>
        </li>
        <li>
          <span>Likes</span>
          <div>
            <span className={css.userNum}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
