import { render } from '@testing-library/react';
import Hide from './Hide';

describe('<Hide />', () => {
  it("should hide it's children according to screen size", () => {
    const { container: xsmall } = render(<Hide xsmall>Content</Hide>);
    const { container: small } = render(<Hide small>Content</Hide>);
    const { container: medium } = render(<Hide medium>Content</Hide>);
    const { container: large } = render(<Hide large>Content</Hide>);

    const { container: smallLarge } = render(
      <Hide small large>
        Content
      </Hide>,
    );
    const { container: xsmallMedium } = render(
      <Hide xsmall medium>
        Content
      </Hide>,
    );
    const { container: smallLargeMedium } = render(
      <Hide small large medium>
        Content
      </Hide>,
    );

    expect(xsmall.firstChild).toMatchSnapshot();
    expect(small.firstChild).toMatchSnapshot();
    expect(medium.firstChild).toMatchSnapshot();
    expect(large.firstChild).toMatchSnapshot();

    expect(smallLarge.firstChild).toMatchSnapshot();
    expect(xsmallMedium.firstChild).toMatchSnapshot();
    expect(smallLargeMedium.firstChild).toMatchSnapshot();
  });
});
