import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('<Modal />', () => {
  const wrapper = (
    <Modal>
      <Modal.Header>
        <Modal.HeaderText>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.HeaderText>
      </Modal.Header>
      <Modal.Content>Modal Content</Modal.Content>
      <Modal.Footer>ModalFooter</Modal.Footer>
    </Modal>
  );

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      render(wrapper);

      const overlay = screen.getByRole('dialog');
      expect(overlay).toMatchSnapshot();

      const card = screen.getByRole('article');
      expect(card).toMatchSnapshot();
    });
  });

  describe('Modal DOM position', () => {
    it('should be child of body element', () => {
      render(wrapper);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('closeIcon', () => {
    it('should exists a closeIcon button when modal is rendered', () => {
      render(<Modal />);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });

  describe('onClose prop', () => {
    it('should call onClose when CloseIcon is clicked', () => {
      const onCloseMock = jest.fn();
      render(<Modal onClose={onCloseMock} />);

      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(onCloseMock).toHaveBeenCalled();
    });

    it('should call onClose when is clicked outside Modal', () => {
      const onCloseMock = jest.fn();
      render(<Modal onClose={onCloseMock} />);

      const overlay = screen.getByRole('dialog');

      fireEvent.click(overlay);

      expect(onCloseMock).toHaveBeenCalled();
    });

    it('should call onClose when "Escape" key is pressed', () => {
      const onCloseMock = jest.fn();

      render(<Modal onClose={onCloseMock} />);

      const overlay = screen.getByRole('dialog');

      fireEvent.keyDown(overlay, {
        key: 'Enter',
        code: 'Enter',
      });

      expect(onCloseMock).not.toHaveBeenCalled();

      fireEvent.keyDown(overlay, {
        key: 'Escape',
        code: 'Escape',
      });

      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  describe('Tab events', () => {
    it('should focus article when modal is open and its doesnt have an input', () => {
      render(
        <Modal>
          <Modal.Content>
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      const article = screen.getByRole('article');

      expect(article).toHaveFocus();
    });

    it('should change focus to link when tab is pressed', () => {
      render(
        <Modal>
          <Modal.Content>
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      expect(screen.getByRole('article')).toHaveFocus();

      userEvent.tab();

      expect(screen.getByRole('link')).toHaveFocus();
    });

    it(`should change focus to first focusable element when tab is pressed on last focusable element`, () => {
      render(
        <Modal>
          <Modal.Content>
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      expect(screen.getByRole('article')).toHaveFocus();

      userEvent.tab({ shift: true });
      userEvent.tab();

      expect(screen.getByRole('article')).toHaveFocus();
    });

    it('should change focus to ok button when shift + tab is pressed two times', () => {
      render(
        <Modal>
          <Modal.Content>
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      expect(screen.getByRole('article')).toHaveFocus();

      userEvent.tab({ shift: true });
      userEvent.tab({ shift: true });

      expect(screen.getByText('Ok')).toHaveFocus();
    });

    it('should focus an input when modal is open', () => {
      render(
        <Modal>
          <Modal.Content>
            <input type="text" />
            <p>
              Some text<a href="catho.com">Some link</a>
            </p>
          </Modal.Content>
          <Modal.Footer>
            <button type="button">Cancel</button>
            <button type="button">Ok</button>
          </Modal.Footer>
        </Modal>,
      );

      const input = screen.getByRole('textbox');

      expect(input).toHaveFocus();
    });
  });
});
