import Popover from '../../components/Popover';
import { Row, Col } from '../../components';

const Template = args => {
  const { ...rest } = args;
  return (
    <Row
      style={{
        padding: '44px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
Default.args = {};

export const WithSkin = Template.bind({});
WithSkin.args = {
  placement: 'top',
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
