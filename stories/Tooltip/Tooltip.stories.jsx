import { Row, Col, Tooltip } from '../../components';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

const Template = (args) => (
  <Row style={{ paddingTop: '72px' }}>
    <Col>
      <Tooltip text="Text..." {...args}>
        Tooltip trigger
      </Tooltip>
    </Col>
  </Row>
);

export const Default = Template.bind({});

export const Multiline = Template.bind({});
Multiline.args = {
  text: 'Multiline\ntext...',
  multiline: true,
};

export const WithPlacement = Template.bind({});
WithPlacement.args = {
  placement: 'right',
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};
