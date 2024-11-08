// import css from './CatalogItem.module.css';

import { useSelector } from 'react-redux';
import { selectVehicles } from '../../../redux/selectors';
import LinkButton from '../../LinkButton/LinkButton';

const CatalogItem = () => {
  const visibleItems = useSelector(selectVehicles);

  const wordByCountReviews = (count: number) => {
    if (count === 1) return ' Review';
    else return ' Reviews';
  };

  // const showFilterText = (filter: boolean) => {
  //   filter ?
  //  };

  return (
    <>
      <ul>
        {visibleItems.map(item => {
          return (
            <li key={item.id}>
              <img
                src={item.gallery[0].original}
                alt={`truck with itemId:${item.id}`}
              />
              <div>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  {/* <svg>
                    <use></use>
                  </svg> */}
                </div>
                <div>
                  {/* <svg>
                    <use></use>
                  </svg> */}
                  <p>
                    {item.rating}({item.reviews.length}
                    {wordByCountReviews(item.reviews.length)})
                  </p>
                  {/* <svg>
                    <use></use>
                  </svg> */}
                  <p></p>
                </div>
                <p>{item.description}</p>
                <div>
                  <div>
                    {/* <svg>
                      <use></use>
                    </svg> */}
                    <p>{item.transmission}</p>
                  </div>
                  <div>
                    {/* <svg>
                      <use></use>
                    </svg> */}
                    <p>{item.engine}</p>
                  </div>
                  <div>
                    {/* <svg>
                      <use></use>
                    </svg> */}
                    <p>{item.kitchen}</p>
                  </div>
                  <div>
                    {/* <svg>
                      <use></use>
                    </svg> */}
                    <p>{item.AC}</p>
                  </div>
                </div>
                <LinkButton link='/'></LinkButton>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CatalogItem;
