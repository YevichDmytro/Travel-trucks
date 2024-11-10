import LinkButton from '../../LinkButton/LinkButton';

import css from './CatalogItem.module.css';

const CatalogItem = ({ item }) => {
  const uniqId = () => Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  const { name, price, location, description, rating, reviews, gallery } = item;

  const ratingInfo = (rating: number, reviewsCount: number) =>
    reviewsCount === 1
      ? `${rating} (${reviewsCount} Review)`
      : `${rating} (${reviewsCount} Reviews)`;

  return (
    <>
      <li className={css.catalogCard}>
        {gallery
          .filter((_, index: number) => index === 0)
          .map((image, index) => (
            <img
              src={image.original}
              alt='Truck for camping'
              className={css.cardImg}
              key={uniqId()}
            />
          ))}
        <div className={css.cardContent}>
          <div className={css.cardTitle}>
            <div className={css.cardTitleWrap}>
              <h2>{name}</h2>
              <p>{price}</p>
            </div>
            <svg width={25} height={24}>
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
          {/* <Categories/> */}
          <LinkButton link='/' newClassName={css.showMoreLink}>
            Show more
          </LinkButton>
        </div>
      </li>
    </>
  );
};

export default CatalogItem;
