import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
