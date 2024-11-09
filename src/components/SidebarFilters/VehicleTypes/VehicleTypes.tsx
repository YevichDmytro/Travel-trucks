import { Field } from 'formik';

const vehicleTypes = [
  { label: 'Van', value: 'panelTruck' },
  { label: 'Fully Integrated', value: 'fullyIntegrated' },
  { label: 'Alcove', value: 'alcove' },
];

const VehicleTypes: React.FC = () => {
  return (
    <>
      {vehicleTypes.map((type, index) => {
        return (
          <label key={index}>
            {type.label}
            <Field type='radio' name='form' value={type.value} />
          </label>
        );
      })}
    </>
  );
};

export default VehicleTypes;
