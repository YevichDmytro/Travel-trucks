import { useDispatch } from 'react-redux';
import { Form, Formik, FormikHelpers } from 'formik';

import Location from './Location/Location';
import VehicleEquipments from './VehicleEquipments/VehicleEquipments';
import VehicleTypes from './VehicleTypes/VehicleTypes';

import { fetchFilteredCampers } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';
import { FormFiltersType } from '../../types/objFiltersTypes';

const SidebarFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormFiltersType = {
    transmission: [],
    AC: '',
    TV: '',
    Kitchen: '',
    Bathroom: '',
    Microwave: '',
    Refrigerator: '',
    Radio: '',
    Gas: '',
    Water: '',
    location: '',
    form: '',
  };

  const handleSubmit = async (
    values: FormFiltersType,
    action: FormikHelpers<FormFiltersType>
  ) => {
    if (Array.isArray(values.transmission)) {
      values.transmission = values.transmission[0];
    }
    console.log(values);
    dispatch(fetchFilteredCampers(values));

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
