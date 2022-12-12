import DropdownLight from '../../components/DropdownLight/DropdownLight';
import { itemsMock } from './mock';

const Template = args => {
  const { items = itemsMock, ...rest } = args;
  return <DropdownLight {...rest} items={items} />;
};

export const Controlled = () => {
  const [fruits] = useState([
    'Lemon',
    'Banana',
    'Strawberry',
    'Orange',
    'Avocado',
  ]);
  const [selectedFruit, setSelectedFruit] = useState('');

  return (
    <DropdownLight
      label="Fruits"
      placeholder="Select a fruit"
      items={fruits}
      selectedItem={selectedFruit}
      onChange={item => setSelectedFruit(item)}
    />
  );
};

export const Default = Template.bind({});
