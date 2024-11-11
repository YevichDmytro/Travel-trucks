import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';

import { AppDispatch } from '../../redux/store';
import { fetchCamperById } from '../../redux/operations';
import { clearCampers } from '../../redux/slices/campersSlice';
import { selectItemById } from '../../redux/selectors';

import css from './DetailsPage.module.css';

const Details: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const camperById = useSelector(selectItemById);
  const params = useParams();
  const camperId = Object.values(params)[0];

  const [selectedComponent, setSelectedComponent] = useState<
    'features' | 'reviews'
  >('features');

  useEffect(() => {
    dispatch(clearCampers());
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  const handleFeaturesClick = () => {
    setSelectedComponent('features');
  };

  const handleReviewsClick = () => {
    setSelectedComponent('reviews');
  };

  const ratingInfo = (
    rating: number | undefined,
    reviewsCount: number | undefined
  ) =>
    reviewsCount === 1
      ? `${rating} (${reviewsCount} Review)`
      : `${rating} (${reviewsCount} Reviews)`;

  return (
    <div className={css.wrapper}>
      <div className={css.mainInfoWrap}>
        <h2 className={css.detailsTitle}>{camperById?.name}</h2>
        <div className={css.reviewsAndLocationInfo}>
          <div className={css.reviewInfoWrap}>
            <svg width={16} height={16}>
              <use href='/ratingIcons/ratingIcons.svg#icon-Property-1Pressed'></use>
            </svg>
            <p className={css.textRating}>
              {ratingInfo(camperById?.rating, camperById?.reviews.length)}
            </p>
          </div>
          <div className={css.locationInfoWrap}>
            <svg width={16} height={16} aria-hidden='true'>
              <use href='/categories/secondSprite.svg#icon-map'></use>
            </svg>
            <p className={css.textLocation}>{camperById?.location}</p>
          </div>
        </div>
        <h2 className={css.textPrice}>{`€${camperById?.price.toFixed(2)}`}</h2>
        <Gallery gallery={camperById?.gallery} />
        <p className={css.textDescr}>{camperById?.description}</p>
      </div>
      <div className={css.tabsWrapper}>
        <button
          className={clsx({
            [css.featureLine]: selectedComponent === 'features',
          })}
          type='button'
          onClick={() => handleFeaturesClick()}
        >
          Features
        </button>
        <button
          className={clsx({
            [css.reviewsLine]: selectedComponent === 'reviews',
          })}
          type='button'
          onClick={() => handleReviewsClick()}
        >
          Reviews
        </button>
        <span className={css.line}></span>
      </div>
      <div className={css.infoWrap}>
        {selectedComponent === 'features' && <Features />}
        {selectedComponent === 'reviews' && <Reviews />}
        <BookingForm />
      </div>
    </div>
  );
};

export default Details;
