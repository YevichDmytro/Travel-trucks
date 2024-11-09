import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import Location from './Location/Location';
import VehicleEquipments from './VehicleEquipments/VehicleEquipments';
import VehicleTypes from './VehicleTypes/VehicleTypes';

import { fetchCampersByFilters } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';
import { clearFilters, setFilters } from '../../redux/slices/filtersSlice';
import { clearCampers } from '../../redux/slices/campersSlice';

const SidebarFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    location: '',
    AC: '',
    TV: '',
    water: '',
    bathroom: '',
    kitchen: '',
    refrigerator: '',
    microwave: '',
    gas: '',
    radio: '',
    transmission: '',
    form: '',
  };

  const handleSubmit = async (values, action) => {
    const completeValues = {
      ...initialValues,
      ...values,
    };
    if (Array.isArray(values.transmission)) {
      values.transmission = values.transmission[0];
    }

    await dispatch(clearFilters());
    await dispatch(clearCampers());

    await dispatch(setFilters(completeValues));
    await dispatch(fetchCampersByFilters());

    action.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Location />
          <VehicleEquipments />
          <VehicleTypes />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SidebarFilters;
