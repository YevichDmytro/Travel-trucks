import Categories from '../../Categories/Categories';
import LinkButton from '../../LinkButton/LinkButton';

import { Vehicle } from '../../../types/campersTypes';

import css from './CatalogItem.module.css';

interface ImageItem {
  thumb: string;
  original: string;
}

interface CatalogItemProps {
  item: Vehicle;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const { name, price, location, description, rating, reviews, gallery } = item;

  const uniqId = () => Math.floor(Math.random() * (300000 - 300 + 1)) + 200;

  const ratingInfo = (rating: number, reviewsCount: number) =>
    reviewsCount === 1
      ? `${rating} (${reviewsCount} Review)`
      : `${rating} (${reviewsCount} Reviews)`;

  return (
    <>
      <li className={css.catalogCard}>
        {gallery
          .filter((_: ImageItem, index: number) => index === 0)
          .map((image: ImageItem) => (
            <img
              src={image.thumb}
              alt='Truck for camping'
              className={css.cardImg}
              key={uniqId()}
            />
          ))}
        <div className={css.cardContent}>
          <div className={css.cardTitle}>
            <div className={css.cardTitleWrap}>
              <h2>{name}</h2>
              <p>{`€${price}.00`}</p>
            </div>
            <svg width={25} height={24} className={css.favoriteIcon}>
              <use href='/isFavoriteIcon/isFavoriteIcons.svg#icon-Property-1Default'></use>
            </svg>
          </div>
          <div className={css.cardInfo}>
            <p>
              <svg width={16} height={16}>
                <use href='/ratingIcons/ratingIcons.svg#icon-Property-1Pressed'></use>
              </svg>
              {ratingInfo(rating, reviews.length)}
            </p>
            <p>
              <svg width={16} height={16} aria-hidden='true'>
                <use href='/categories/secondSprite.svg#icon-map'></use>
              </svg>
              {location}
            </p>
          </div>
          <p className={css.cardDescription}>{description}</p>
          <Categories item={item} />
          <LinkButton link='/' newClassName={css.showMoreLink}>
            Show more
          </LinkButton>
        </div>
      </li>
    </>
  );
};

export default CatalogItem;
