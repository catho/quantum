import { Popover, Button, Row, Col } from '../../components';

const handleDirectionPosition = (direction) => {
  if (direction === 'right') return { paddingTop: '80px', paddingLeft: '20px' };
  if (direction === 'bottom')
    return { paddingTop: '20px', paddingLeft: '160px' };
  return { paddingTop: '80px', paddingLeft: '160px' };
};

const Template = (args) => {
  const { direction, skin } = args;

  return (
    <div>
      <Row style={handleDirectionPosition(direction)}>
        <Col>
          <Popover
            placement={direction}
            skin={skin}
            trigger={<Button>Popover trigger</Button>}
            visible
          >
            Some text
          </Popover>
        </Col>
      </Row>
    </div>
  );
};

export default {
  title: 'Popover',
  component: Popover,
};

export const NeutralTop = Template.bind({});
NeutralTop.args = {
  direction: 'top',
  skin: 'neutral',
};

export const NeutralBottom = Template.bind({});
NeutralBottom.args = {
  direction: 'bottom',
  skin: 'neutral',
};

export const NeutralLeft = Template.bind({});
NeutralLeft.args = {
  direction: 'left',
  skin: 'neutral',
};

export const NeutralRight = Template.bind({});
NeutralRight.args = {
  direction: 'right',
  skin: 'neutral',
};

export const PrimaryTop = Template.bind({});
PrimaryTop.args = {
  direction: 'top',
  skin: 'primary',
};

export const PrimaryBottom = Template.bind({});
PrimaryBottom.args = {
  direction: 'bottom',
  skin: 'primary',
};

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
  direction: 'left',
  skin: 'primary',
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
  direction: 'right',
  skin: 'primary',
};

export const SuccessTop = Template.bind({});
SuccessTop.args = {
  direction: 'top',
  skin: 'success',
};

export const SuccessBottom = Template.bind({});
SuccessBottom.args = {
  direction: 'bottom',
  skin: 'success',
};

export const SuccessLeft = Template.bind({});
SuccessLeft.args = {
  direction: 'left',
  skin: 'success',
};

export const SuccessRight = Template.bind({});
SuccessRight.args = {
  direction: 'right',
  skin: 'success',
};

export const WarningTop = Template.bind({});
WarningTop.args = {
  direction: 'top',
  skin: 'warning',
};

export const WarningBottom = Template.bind({});
WarningBottom.args = {
  direction: 'bottom',
  skin: 'warning',
};

export const WarningLeft = Template.bind({});
WarningLeft.args = {
  direction: 'left',
  skin: 'warning',
};

export const WarningRight = Template.bind({});
WarningRight.args = {
  direction: 'right',
  skin: 'warning',
};

export const ErrorTop = Template.bind({});
ErrorTop.args = {
  direction: 'top',
  skin: 'error',
};

export const ErrorBottom = Template.bind({});
ErrorBottom.args = {
  direction: 'bottom',
  skin: 'error',
};

export const ErrorLeft = Template.bind({});
ErrorLeft.args = {
  direction: 'left',
  skin: 'error',
};

export const ErrorRight = Template.bind({});
ErrorRight.args = {
  direction: 'right',
  skin: 'error',
};
