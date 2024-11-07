import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headerWrap}>
      <h2 className={css.logoIcon}>Logo</h2>
      <ul className={css.navList}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/catalog'>Catalog</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
