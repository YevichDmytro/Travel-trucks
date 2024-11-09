import { Field } from 'formik';
import React, { useState } from 'react';

const Location: React.FC = () => {
  const [location, setLocationInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(event.target.value);
  };

  return (
    <>
      <Field
        type='text'
        name='location'
        value={location}
        onChange={handleChange}
        placeholder='City'
      />
    </>
  );
};

export default Location;
