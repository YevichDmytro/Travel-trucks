import css from './Categories.module.css';

const Categories = () => {
  return (
    <ul>
      <li>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-lucide_microwave'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-ph_shower'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-solar_fridge-outline'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-ui-radios'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-wind'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-cup-hot'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-diagram'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/sprite.svg#icon-fuel-pump'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-hugeicons_gas-stove'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20} className={css.icon}>
          <use href='/categories/sprite.svg#icon-ion_water-outline'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-alcove'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-fullyIntegrated'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-van'></use>
        </svg>
      </li>
      <li>
        <svg width={20} height={20}>
          <use href='/categories/secondSprite.svg#icon-TV'></use>
        </svg>
      </li>
    </ul>
  );
};

export default Categories;
