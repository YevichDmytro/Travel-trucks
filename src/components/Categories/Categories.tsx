import css from './Categories.module.css';

const Categories = () => {
  return (
    <ul className={css.categoryList}>
      <li className={css.category}>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-microwave'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-shower'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-fridge'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-radios'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-wind'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-cup-hot'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-diagram'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-fuel-pump'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-gas-stove'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-water'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-alcove'></use>
        </svg>
        <p>text</p>
      </li>
      <li>
        <svg width={20} heig className={css.category} ht={20}>
          <use href='/categories/secondSprite.svg#icon-fullyIntegrated'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-van'></use>
        </svg>
        <p>text</p>
      </li>
      <li className={css.category}>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-TV'></use>
        </svg>
        <p>text</p>
      </li>
    </ul>
  );
};

export default Categories;
