import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

const encodedPicture =
  'data:image/jpeg;base64,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';

describe('<Avatar />', () => {
  it('should have a11y notification roles', () => {
    const { container } = render(<Avatar hasNotification />);
    const AvatarWrapper = container.querySelectorAll('span')[0];
    expect(AvatarWrapper.getAttribute('aria-live')).toBe('polite');
    const AvatarNotification = screen.getByRole('alert');
    expect(AvatarNotification.getAttribute('role')).toEqual('alert');
  });

  describe('Should match snapshot', () => {
    it('With picture', () => {
      const { container } = render(<Avatar picture={encodedPicture} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('Without picture', () => {
      const { container } = render(<Avatar />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('With notification', () => {
      const { container } = render(<Avatar hasNotification />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('With text', () => {
      const { container } = render(<Avatar text="Profile" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('With href', () => {
      const { container } = render(<Avatar href="#" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('With toggle icon', () => {
      const { container } = render(<Avatar hasToggle />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
