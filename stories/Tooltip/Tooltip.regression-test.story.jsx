import { Tooltip, Button, Row, Col } from '../../components';

const decorator = Story => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>
      <Story />
    </Col>
  </Row>
);

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [decorator],
};

const Template = args => (
  <Tooltip text="This is a hint." visible {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

export const Top = Template.bind(null);
Top.args = {
  placement: 'top',
};

export const Bottom = Template.bind(null);
Bottom.args = {
  placement: 'bottom',
};

export const Left = Template.bind(null);
Left.args = {
  placement: 'left',
};

export const Right = Template.bind(null);
Right.args = {
  placement: 'right',
};

export const Multiline = Template.bind({});
Multiline.args = {
  placement: 'left',
  multiline: true,
  text: `This is a hint\nin multiline\nmode.`,
};
