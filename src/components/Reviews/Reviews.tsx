import { useSelector } from 'react-redux';

import Loader from '../Loader/Loader';

import { selectIsError, selectIsLoading } from '../../redux/selectors';
import { ItemProps } from '../../types/campersTypes';

import css from './Reviews.module.css';

const Reviews: React.FC<ItemProps> = ({ item }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {!isLoading && !isError && (
        <div>
          <ul>
            {item?.reviews.map(item => {
              return (
                <li>
                  <div className={css.commentWrap}>
                    <div className={css.avatar}>
                      {item.reviewer_name.charAt(0).toUpperCase()}
                    </div>
                    <div className={css.commentHead}>
                      <p className={css.name}>{item.reviewer_name}</p>
                      <ul className={css.starts}>
                        <li>
                          <svg>
                            <use></use>
                          </svg>
                        </li>
                        <li>
                          <svg>
                            <use></use>
                          </svg>
                        </li>
                        <li>
                          <svg>
                            <use></use>
                          </svg>
                        </li>
                        <li>
                          <svg>
                            <use></use>
                          </svg>
                        </li>
                        <li>
                          <svg>
                            <use></use>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className={css.descr}></p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isLoading && <Loader type='async' />}
      {isError && <div>Error occurred</div>}
    </>
  );
};

export default Reviews;
