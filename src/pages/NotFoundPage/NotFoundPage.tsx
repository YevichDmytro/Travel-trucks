import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(4);
  const [word, setWord] = useState('seconds');

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 2) setWord('second');
        return prevCount - 1;
      });
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/', { replace: true });
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(redirect);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Page not found</h1>
      <h2>
        You will be navigate to home page in {count} {word}
      </h2>
    </div>
  );
};

export default NotFoundPage;