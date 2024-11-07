import axios from 'axios';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

const App = () => {
  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get(
          'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    func();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
