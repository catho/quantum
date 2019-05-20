import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Hide from './Hide';

describe('<Hide />', () => {
  it("should hide it's children according to screen size", () => {
    expect(
      renderer.create(<Hide xsmall>Content</Hide>).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Hide small>Content</Hide>).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Hide medium>Content</Hide>).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Hide large>Content</Hide>).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Hide xlarge>Content</Hide>).toJSON(),
    ).toMatchSnapshot();
  });
});
