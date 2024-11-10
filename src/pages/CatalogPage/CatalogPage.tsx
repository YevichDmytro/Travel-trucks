import { useSelector } from 'react-redux';

import Catalog from '../../components/Catalog/Catalog';
import SidebarFilters from '../../components/SidebarFilters/SidebarFilters';

import { selectIsError, selectIsLoading } from '../../redux/selectors';

import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader';

const CatalogPage: React.FC = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      <SidebarFilters />
      {!isLoading && !isError && <Catalog />}
      {isLoading && <Loader type='async' />}
      {isError && <div>Error occurred</div>}
    </div>
  );
};

export default CatalogPage;
