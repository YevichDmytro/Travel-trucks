// import Catalog from '../../components/Catalog/Catalog';
import SidebarFilters from '../../components/SidebarFilters/sidebarFilters';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <SidebarFilters />
      {/* <Catalog /> */}
    </div>
  );
};

export default CatalogPage;
