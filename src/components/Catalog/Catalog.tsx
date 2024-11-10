import { useDispatch, useSelector } from 'react-redux';

import CatalogItem from './CatalogItem/CatalogItem';

import { selectCampers, selectCurrentPage, selectLimitItems } from '../../redux/selectors';
import { Vehicle } from '../../types/campersTypes';

import css from './Catalog.module.css';
import { AppDispatch } from '../../redux/store';

const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const visibleItems = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectLimitItems);

  const loadMoreHandle = () => {
    dispatch();
  };

  return (
    <>
      <ul>
        {visibleItems.map((item: Vehicle) => (
          <CatalogItem item={item} key={item.id} />
        ))}
      </ul>
      <button
        type='button'
        onClick={() => loadMoreHandle()}
        className={css.loadMoreBtn}
      >
        Load More
      </button>
    </>
  );
};

export default Catalog;
