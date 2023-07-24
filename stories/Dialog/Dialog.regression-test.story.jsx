import { Dialog, Button } from '../../components';
import Example, { ButtonWrapper } from './ExampleStyle';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const WithContent = Template.bind({});
WithContent.args = {
  selector: '#regression-test',
  children: (
    <Example>
      <h3>Salvar alteração?</h3>
      <ButtonWrapper>
        <Button skin="error">Cancelar</Button>
        <Button>Salvar</Button>
      </ButtonWrapper>
    </Example>
  ),
  shouldOpen: true,
};
