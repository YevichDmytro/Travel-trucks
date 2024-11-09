import { Field } from 'formik';

const vehicleEquipments = [
  { text: 'AC', name: 'AC' },
  { text: 'Automatic', name: 'transmission', value: 'automatic' },
  { text: 'TV', name: 'TV' },
  { text: 'Kitchen', name: 'Kitchen' },
  { text: 'Bathroom', name: 'Bathroom' },
  { text: 'Microwave', name: 'Microwave' },
  { text: 'Refrigerator', name: 'Refrigerator' },
  { text: 'Radio', name: 'Radio' },
  { text: 'Gas', name: 'Gas' },
  { text: 'Water', name: 'Water' },
];

const VehicleEquipments: React.FC = () => {
  return (
    <>
      <p>Filters</p>
      {vehicleEquipments.map((element, index) => {
        return (
          <label key={index}>
            {element.text}
            <Field type='checkbox' name={element.name} value={element.value} />
          </label>
        );
      })}
    </>
  );
};

export default VehicleEquipments;
