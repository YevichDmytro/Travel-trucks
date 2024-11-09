// import Catalog from '../../components/Catalog/Catalog';
import SidebarFilters from '../../components/SidebarFilters/SidebarFilters';
import css from './CatalogPage.module.css';

const CatalogPage: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <SidebarFilters />
      {/* <Catalog /> */}
    </div>
  );
};

export default CatalogPage;
