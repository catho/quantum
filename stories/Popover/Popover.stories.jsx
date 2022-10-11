import Popover from '../../components/Popover';
import { Row, Col } from '../../components';

const Template = args => {
  const { children: Component, ...rest } = args;
  return (
    <>
      <Row style={{ paddingTop: '72px', paddingLeft: '414px' }}>
        <Col>
          <Popover {...rest}>{Component}</Popover>
        </Col>
      </Row>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const NeutralTop = Template.bind({});
NeutralTop.args = {
  direction: 'top',
  placement: 'top',
  skin: 'neutral',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const NeutralBottom = Template.bind({});
NeutralBottom.args = {
  direction: 'bottom',
  placement: 'bottom',
  skin: 'neutral',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const NeutralLeft = Template.bind({});
NeutralLeft.args = {
  direction: 'left',
  placement: 'left',
  skin: 'neutral',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const NeutralRight = Template.bind({});
NeutralRight.args = {
  direction: 'right',
  placement: 'right',
  skin: 'neutral',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const PrimaryTop = Template.bind({});
PrimaryTop.args = {
  direction: 'top',
  placement: 'top',
  skin: 'primary',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const PrimaryBottom = Template.bind({});
PrimaryBottom.args = {
  direction: 'bottom',
  placement: 'bottom',
  skin: 'primary',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
  direction: 'left',
  placement: 'left',
  skin: 'primary',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
  direction: 'right',
  placement: 'right',
  skin: 'primary',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const SuccessTop = Template.bind({});
SuccessTop.args = {
  direction: 'top',
  placement: 'top',
  skin: 'success',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const SuccessBottom = Template.bind({});
SuccessBottom.args = {
  direction: 'bottom',
  placement: 'bottom',
  skin: 'success',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const SuccessLeft = Template.bind({});
SuccessLeft.args = {
  direction: 'left',
  placement: 'left',
  skin: 'success',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const SuccessRight = Template.bind({});
SuccessRight.args = {
  direction: 'right',
  placement: 'right',
  skin: 'success',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const WarningTop = Template.bind({});
WarningTop.args = {
  direction: 'top',
  placement: 'top',
  skin: 'warning',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const WarningBottom = Template.bind({});
WarningBottom.args = {
  direction: 'bottom',
  placement: 'bottom',
  skin: 'warning',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const WarningLeft = Template.bind({});
WarningLeft.args = {
  direction: 'left',
  placement: 'left',
  skin: 'warning',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const WarningRight = Template.bind({});
WarningRight.args = {
  direction: 'right',
  placement: 'right',
  skin: 'warning',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const ErrorTop = Template.bind({});
ErrorTop.args = {
  direction: 'top',
  placement: 'top',
  skin: 'error',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const ErrorBottom = Template.bind({});
ErrorBottom.args = {
  direction: 'bottom',
  placement: 'bottom',
  skin: 'error',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const ErrorLeft = Template.bind({});
ErrorLeft.args = {
  direction: 'left',
  placement: 'left',
  skin: 'error',
  children: 'childrenText...',
  trigger: 'triggerText...',
};

export const ErrorRight = Template.bind({});
ErrorRight.args = {
  direction: 'right',
  placement: 'right',
  skin: 'error',
  children: 'childrenText...',
  trigger: 'triggerText...',
};
