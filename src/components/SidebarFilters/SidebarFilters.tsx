import { Form, Formik, FormikHelpers } from 'formik';
import Location from './Location/Location';
import VehicleEquipments from './VehicleEquipments/VehicleEquipments';
import VehicleTypes from './VehicleTypes/VehicleTypes';

interface FormValues {
  transmission: string[] | string;
  AC: string;
  TV: string;
  Kitchen: string;
  Bathroom: string;
  Microwave: string;
  Refrigerator: string;
  Radio: string;
  Gas: string;
  Water: string;
  location: string;
  form: string;
}

const SidebarFilters = () => {
  const initialValues: Partial<FormValues> = {};

  const handleSubmit = (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    values.transmission = values.transmission[0];

    console.log(values);
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
