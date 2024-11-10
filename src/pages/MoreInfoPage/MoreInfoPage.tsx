import { useState } from 'react';

import Features from '../../components/Features/Features';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';

// import css from './MoreInfoPage.module.css';

const MoreInfoPage: React.FC = () => {
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

export default MoreInfoPage;
