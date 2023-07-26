import Popover from '../../components/Popover';
import { Row, Col } from '../../components';

export default {
  title: 'Popover',
  component: Popover,
};

const Template = (args) => {
  const { ...rest } = args;
  return (
    <Row
      style={{
        padding: '72px',
      }}
    >
      <Col>
        <Popover trigger="TriggerText" {...rest}>
          childrenText
        </Popover>
      </Col>
    </Row>
  );
};

export const Default = Template.bind({});

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'success',
};

export const WithPlacement = Template.bind({});
WithPlacement.args = {
  placement: 'right',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};
