// import { Formik } from 'formik';
// import css from './ChooseLocation.module.css';

import { useState } from 'react';

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
];

const Location = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCities, setFilteredCities] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = cities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelect = (city: string) => {
    setInputValue(city);
    setFilteredCities([]);
  };

  return (
    <>
      <label htmlFor=''></label>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='City'
      />
      {filteredCities.length > 0 && (
        <ul>
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => handleSelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Location;
