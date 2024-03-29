import { Modal, Button, Input } from '../../components';

const modalHeader = (titleProps = {}) => (
  <Modal.Header>
    <Modal.HeaderText>
      <Modal.Title {...titleProps}>
        Are you sure you want to delete this item?
      </Modal.Title>
    </Modal.HeaderText>
  </Modal.Header>
);

const modalFooterSimple = <Modal.Footer>this is a modal footer</Modal.Footer>;

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const { header = modalHeader(), footer = modalFooterSimple } = args;
  return (
    <Modal>
      {header}
      <Modal.Content>
        You will not be able to recover this item later.
      </Modal.Content>
      {footer}
    </Modal>
  );
};

const TemplateWithInput = (args) => {
  const { header = modalHeader(), footer = modalFooterSimple } = args;
  return (
    <Modal>
      {header}
      <Modal.Content>
        <Input />
        You will not be able to recover this item later.
      </Modal.Content>
      {footer}
    </Modal>
  );
};

export const Simple = Template.bind({});

export const SimpleWithInput = TemplateWithInput.bind({});

export const SimpleWithSmallTitle = Template.bind({});
SimpleWithSmallTitle.args = {
  header: modalHeader({ small: true }),
};

export const WithButtonActions = Template.bind({});
WithButtonActions.args = {
  footer: (
    <Modal.Footer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button style={{ marginRight: 24 }} stroked>
          Cancel
        </Button>
        <Button>Delete</Button>
      </div>
    </Modal.Footer>
  ),
};
