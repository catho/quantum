import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('Should match the snapshot', () => {
      const { container } = render(
        <Card>
          <Card.Header>
            <Card.HeaderText>
              <Card.Title>Title</Card.Title>
              <Card.Description>Description</Card.Description>
            </Card.HeaderText>
            <Card.Thumbnail src="#" alt="Thumbnail" />
          </Card.Header>
          <Card.Content>Content</Card.Content>
          <Card.Footer>Footer</Card.Footer>
        </Card>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match snapshot with rounded Thumbnail', () => {
      const { container } = render(<Card.Thumbnail src="" alt="" rounded />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match snapshot with small Title', () => {
      const { container } = render(<Card.Title small />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match snapshot with small Description', () => {
      const { container } = render(<Card.Description small />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
