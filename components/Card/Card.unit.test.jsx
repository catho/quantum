import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('Should match the snapshot', () => {
      expect(
        renderer
          .create(
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
          )
          .toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with rounded Thumbnail', () => {
      expect(
        renderer.create(<Card.Thumbnail src="" alt="" rounded />).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with small Title', () => {
      expect(renderer.create(<Card.Title small />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with small Description', () => {
      expect(
        renderer.create(<Card.Description small />).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
