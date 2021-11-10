import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ChargeBar from './ChargeBar';

const customLabel = 'curriculum force';
const progressPercent = 75;

describe('ChargeBar component', () => {
  it('Should match the snapshot of ChargeBar', () => {
    expect(renderer.create(<ChargeBar />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<ChargeBar skin="secondary" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<ChargeBar skin="success" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<ChargeBar skin="neutral" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer
        .create(
          <ChargeBar label={customLabel} progressPercent={progressPercent} />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('should the pops match and shows correctly', () => {
    const percent = 30;
    const component = mount(
      <ChargeBar progressPercent={percent} label={customLabel} />,
    );
    const ChargeBarPercent = component.find('ProgressLabel').text();
    const ChargeBarLabel = component.find('LabelInfo').text();

    const percentShouldBe = `${percent}%`;
    expect(ChargeBarPercent).toBe(percentShouldBe);
    expect(ChargeBarLabel).toBe(customLabel);
  });
});
