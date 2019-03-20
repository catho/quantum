import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
  it('Should match the snapshot', () => {
    expect(
      renderer
        .create(
          <Card>
            <Card.Header>
              <Card.HeaderText>
                <Card.Title>Title</Card.Title>
                <Card.SubTitle>SubTitle</Card.SubTitle>
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
});
