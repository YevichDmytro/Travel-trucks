import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';

import { selectCampers } from '../../../redux/selectors';

import css from './Location.module.css';

const Location: React.FC = () => {
  const locations = useSelector(selectCampers);

  const { values, setFieldValue } = useFormikContext<{ location: string }>();

  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const uniqueLocations = Array.from(
    new Set(locations.map(item => item.location))
  );

  const filterLocations = (value: string) => {
    if (value.trim() === '') {
      return [];
    }
    return uniqueLocations.filter(location =>
      location.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFieldValue('location', value);

    if (value.trim() === '') {
      return setFilteredLocations([]);
    }

    const filtered = filterLocations(value);
    setFilteredLocations(filtered);
  };

  const handleLocationSelect = (location: string) => {
    setFieldValue('location', location);
    setTimeout(() => {
      setFilteredLocations([]);
      setIsFocused(false);
    }, 300);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const handleFocus = () => {
    if (values.location !== undefined && values.location.trim() !== '') {
      setFilteredLocations(filterLocations(values.location));
    }
    setIsFocused(true);
  };

  return (
    <div className={css.inputWrapper}>
      <Field
        type='text'
        name='location'
        value={values.location ?? ''}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder='City'
      />

      {isFocused && filteredLocations.length > 0 && (
        <ul className={css.dropdownList}>
          {filteredLocations.map((location, index) => (
            <li
              key={index}
              onClick={() => handleLocationSelect(location)}
              className={css.dropdownItem}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Location;

// return items.filter(item =>
//   item.location.toLowerCase().includes(userLocation.toLowerCase())
// );
