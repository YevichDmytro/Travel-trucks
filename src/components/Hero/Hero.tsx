import css from './Hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className={css.heroWrap}>
      <div className={css.titleWrap}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>

        <Button newClassName={css.heroBtn} onClick={() => alert('hello')}>
          View Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
