import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './Tag';

const testSnapshot = (props = {}) => {
  const propsList = Array.isArray(props) ? props : [props];

  propsList.forEach(p => {
    const { container } = render(<Tag {...p} />);
    expect(container.firstChild).toMatchSnapshot();
  });
};

describe('<Tag />', () => {
  it('without props', () => testSnapshot());
  it('with only text prop / children', () =>
    testSnapshot([{ text: 'example' }, { children: 'example' }]));
  it('with bold prop', () => testSnapshot({ bold: true }));

  describe('Skins', () => {
    it('primary', () => testSnapshot({ skin: 'primary' }));
    it('success', () => testSnapshot({ skin: 'success' }));
    it('warning', () => testSnapshot({ skin: 'warning' }));
    it('error', () => testSnapshot({ skin: 'error' }));
  });

  describe('Sizes', () => {
    it('small', () => testSnapshot({ size: 'small' }));
    it('medium', () => testSnapshot({ size: 'medium' }));
    it('large', () => testSnapshot({ size: 'large' }));
  });

  describe('Inverted prop', () => {
    it('neutral', () => testSnapshot({ inverted: true }));
    it('primary', () => testSnapshot({ skin: 'primary', inverted: true }));
    it('success', () => testSnapshot({ skin: 'success', inverted: true }));
    it('warning', () => testSnapshot({ skin: 'warning', inverted: true }));
    it('error', () => testSnapshot({ skin: 'error', inverted: true }));
  });

  describe('Stroked prop', () => {
    it('neutral', () => testSnapshot({ stroked: true }));
    it('primary', () => testSnapshot({ skin: 'primary', stroked: true }));
    it('success', () => testSnapshot({ skin: 'success', stroked: true }));
    it('warning', () => testSnapshot({ skin: 'warning', stroked: true }));
    it('error', () => testSnapshot({ skin: 'error', stroked: true }));
  });

  describe('onClose Prop', () => {
    it('is rendering well', () => {
      testSnapshot({ onClose: () => {} });
      testSnapshot({ onClose: () => {}, skin: 'primary' });
      testSnapshot({ onClose: () => {}, skin: 'success' });
      testSnapshot({ onClose: () => {}, skin: 'warning' });
      testSnapshot({ onClose: () => {}, skin: 'error' });

      testSnapshot({ onClose: () => {}, inverted: true });
      testSnapshot({ onClose: () => {}, skin: 'primary', inverted: true });
      testSnapshot({ onClose: () => {}, skin: 'success', inverted: true });
      testSnapshot({ onClose: () => {}, skin: 'warning', inverted: true });
      testSnapshot({ onClose: () => {}, skin: 'error', inverted: true });

      testSnapshot({ onClose: () => {}, stroked: true });
      testSnapshot({ onClose: () => {}, skin: 'primary', stroked: true });
      testSnapshot({ onClose: () => {}, skin: 'success', stroked: true });
      testSnapshot({ onClose: () => {}, skin: 'warning', stroked: true });
      testSnapshot({ onClose: () => {}, skin: 'error', stroked: true });
    });

    it('is called when close button is clicked', () => {
      const onCloseMock = jest.fn();
      render(<Tag closable onClose={onCloseMock} />);

      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
