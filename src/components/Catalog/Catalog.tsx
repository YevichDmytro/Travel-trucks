import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors';
import CatalogItem from './CatalogItem/CatalogItem';
import { Vehicle } from '../../types/campersTypes';
// import css from './Catalog.module.css';

const Catalog: React.FC = () => {
  const visibleItems = useSelector(selectCampers);

  return (
    <>
      <ul>
        {visibleItems.map((item: Vehicle) => (
          <CatalogItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default Catalog;
