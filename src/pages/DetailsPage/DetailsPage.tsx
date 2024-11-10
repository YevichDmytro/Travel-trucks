import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';

import { AppDispatch } from '../../redux/store';
import { fetchCamperById } from '../../redux/operations';
import { clearCampers } from '../../redux/slices/campersSlice';

const Details: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const camperId = Object.values(params)[0];

  useEffect(() => {
    dispatch(clearCampers());
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  const [selectedComponent, setSelectedComponent] = useState<
    'features' | 'reviews'
  >('features');

  const handleFeaturesClick = () => {
    setSelectedComponent('features');
  };

  const handleReviewsClick = () => {
    setSelectedComponent('reviews');
  };

  return (
    <div>
      <div>
        <h2>title</h2>
        <div>
          <svg>
            <use></use>
          </svg>
          <p>rating</p>
        </div>
        <div>
          <svg>
            <use></use>
          </svg>
          <p>location</p>
        </div>
        <h2>cost</h2>
        <Gallery />
        <p></p>
      </div>
      <div>
        <button type='button' onClick={() => handleFeaturesClick()}>
          Features
        </button>
        <button type='button' onClick={() => handleReviewsClick()}>
          Reviews
        </button>
      </div>
      {selectedComponent === 'features' && <Features />}
      {selectedComponent === 'reviews' && <Reviews />}
      <BookingForm />
    </div>
  );
};

export default Details;
