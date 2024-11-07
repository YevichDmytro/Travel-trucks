import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headerWrap}>
      <h2 className={css.logoIcon}>Logo</h2>
      <nav className={css.navList}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
      </nav>
    </div>
  );
};

export default Header;
